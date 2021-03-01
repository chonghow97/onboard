import React, { useRef, useState } from "react";
import { Modal, View } from "react-native";
import VideoPlayer from "react-native-video-controls";
import { get } from "lodash";
import { Image } from "components";
import { tw } from "tailwind";
import { VideoProps } from "./props";
import { PlayButton } from "./styles";

const playIcon = require("assets/icons/play.png");

// Simple reusable component, handles simple ui or functions
/**
 * - video component with fullscreen feature
 * - cover play button and paused before first play
 *
 * test uri
 * - video: http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4
 * - thumbnail: http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg
 * @param uri video uri: string
 * @param thumbnail thumbnail image uri: string
 * @param style styling for video player when not in fullscreen
 */
export const Video = (props: VideoProps) => {
  const { uri: videoUri, thumbnail: videoThumbnail, loading, style } = props;

  // --------------------STATES & VARIABLES
  // toggle fullscreen modal
  const [videoFullScreen, setVideoFullScreen] = useState(false);
  // removes play cover when true
  const [videoStart, setVideoStart] = useState(false);
  // controls play/pause when not using video player controls
  const [videoPaused, setVideoPaused] = useState(true);

  // --------------------HOOKS
  const modalRef = useRef();
  const videoRef = useRef();

  // --------------------FUNCTIONS

  /** on press fullscreen toggle in fullscreen */
  const onExitFullscreen = () => setVideoFullScreen(false);
  /** when modal is rendered */
  const onEnterFullscreen = () => {
    const modalVideoIsFullscreen = get(
      modalRef,
      "current.state.isFullscreen",
      false
    );
    const toggleModalFullscreen = get(
      modalRef,
      "current.methods.toggleFullscreen",
      () => console.log("modal video toggleFullscreen undefined")
    );
    // video player not rendered as fullscreen in modal, changes video player to fullscreen
    if (!modalVideoIsFullscreen) toggleModalFullscreen();
  };
  /** on press play button cover that is shown when video player is first loaded */
  const onPressPlayCover = () => {
    // removes play cover
    setVideoStart(true);
    // starts the video when loaded
    setVideoPaused(false);
  };
  /** on press fullscreen toggle on player when not in fullscreen */
  const onPressFullscreen = () => {
    const toggleVideoFullscreen = get(
      videoRef,
      "current.methods.toggleFullscreen",
      () => console.log("video toggleFullscreen undefined")
    );
    setVideoFullScreen(true);
    // pauses video when entering fullscreen
    setVideoPaused(true);
    // toggle fullscreen button to match current state
    toggleVideoFullscreen();
  };

  // --------------------RENDER
  return (
    <View>
      <Modal visible={videoFullScreen}>
        <VideoPlayer
          ref={modalRef}
          toggleResizeModeOnFullscreen={false}
          source={{ uri: videoUri }}
          onExitFullscreen={onExitFullscreen}
          onLoadStart={onEnterFullscreen}
          disableBack
        />
      </Modal>
      <View style={[tw("min-h-3/10"), style]}>
        {videoStart === false && (
          <PlayButton onPress={onPressPlayCover}>
            <Image source={playIcon} size={50} />
          </PlayButton>
        )}
        {!loading && (
          <VideoPlayer
            ref={videoRef}
            toggleResizeModeOnFullscreen={false}
            source={{ uri: videoUri }}
            onEnterFullscreen={onPressFullscreen}
            poster={videoThumbnail}
            posterResizeMode="cover"
            paused={videoPaused}
            showOnStart={false}
            disableBack
          />
        )}
      </View>
    </View>
  );
};
