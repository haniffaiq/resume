import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle px-6">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          404
        </p>
        <h1 className="mt-3 text-4xl font-bold text-foreground">Page not found</h1>
        <p className="mt-4 text-lg text-surface-medium">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link to="/">Return home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
