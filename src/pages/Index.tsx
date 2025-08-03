import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Index = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [redirecting, setRedirecting] = useState(false);
  const [redirectMessage, setRedirectMessage] = useState('');

  useEffect(() => {
    if (!loading) {
      setRedirecting(true);
      if (user) {
        setRedirectMessage('Welcome back! Redirecting to dashboard...');
        setTimeout(() => navigate('/dashboard'), 500);
      } else {
        setRedirectMessage('Redirecting to login...');
        setTimeout(() => navigate('/auth'), 300);
      }
    }
  }, [user, loading, navigate]);

  if (loading || redirecting) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4 animate-fade-in">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-primary animate-scale-in">QuickDesk</h1>
            <p className="text-lg text-muted-foreground">Your helpdesk solution</p>
          </div>
          <div className="space-y-3">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-muted-foreground animate-pulse">
              {redirectMessage || 'Loading...'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Index;
