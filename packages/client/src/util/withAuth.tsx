import React from "react";
import { useRouter } from "next/router";
import { useMeQuery } from "src/generated/codegen";
import { Center, CircularProgress } from "@mustardmind/mauinz";

/**
 * A Higher Order Component to protect pages from unauthenticated access.
 *
 * Redirects to "/sign-in" if unauthenticated.
 */
export const withAuth = (WrappedComponent: React.ComponentType) => {
  const WithAuthWrapper: React.FC = (props) => {
    const router = useRouter();
    const { loading, data, error } = useMeQuery();

    if (loading) {
      return (
        <Center h="100%">
          <CircularProgress isIndeterminate />
        </Center>
      );
    }

    if (!data?.me || error) {
      router.push("/sign-in");
      return <></>;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthWrapper;
};
