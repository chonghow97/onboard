import { UsersModel, Users } from "./users";

test("can be created", () => {
  const instance: Users = UsersModel.create({});

  expect(instance).toBeTruthy();
});
