import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";
import Users from "../users/page";


const getUsers = async () => {
  const session = await getSession();

  if (!session?.user?.email) {
    return [];
  }

  try {
    const user = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          email: session.user.email,
        },
      },
    });

    return Users;
  } catch (error: any) {
    return [];
  }
};

export default getUsers;
