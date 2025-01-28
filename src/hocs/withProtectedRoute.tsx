import { useRouter } from "next/router";
import { useAuth } from "src/context/AuthContext";
import React, { useEffect } from "react";

const withProtectedRoute = (WrappedComponent: React.ComponentType) => {
  const ProtectedRoute = (props: any) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push("/auth/login");
      }
    }, [loading, user, router]);

    if (loading || !user) {
      // Optionally, you can show a loading spinner here.
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return ProtectedRoute;
};

export default withProtectedRoute;
