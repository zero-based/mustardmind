import React from "react";
import { Center, Heading } from "@mustardmind/mauinz";
import { withAuth } from "../util/withAuth";

const Dashboard: React.FC<{}> = () => {
  return (
    <Center h="100%">
      <Heading>Welcome to your Dashboard!</Heading>
    </Center>
  );
};

export default withAuth(Dashboard);
