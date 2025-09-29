import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <div className="glass-strong p-12 rounded-2xl border border-primary/30">
          <div className="text-8xl sm:text-9xl font-orbitron font-black text-gradient mb-6">
            404
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-orbitron font-bold mb-4 text-foreground">
            Page Not Found
          </h1>
          
          <p className="text-lg font-inter text-muted-foreground mb-8 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved, 
            deleted, or you entered the wrong URL. Don't worry, let's get you back on track!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/" className="inline-flex items-center gap-2">
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="glass" 
              size="lg"
              onClick={() => window.history.back()}
            >
              <button className="inline-flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </Button>
          </div>
          
          <div className="mt-8 text-sm font-inter text-muted-foreground">
            Error Code: 404 • Path: {location.pathname}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
