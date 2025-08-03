import { useUserProfile } from '@/hooks/useUserProfile';
import { Layout } from '@/components/Layout';
import { UserDashboard } from '@/components/dashboards/UserDashboard';
import { AgentDashboard } from '@/components/dashboards/AgentDashboard';
import { AdminDashboard } from '@/components/dashboards/AdminDashboard';
import { Skeleton } from '@/components/ui/skeleton';

const Dashboard = () => {
  const { profile, loading } = useUserProfile();

  if (loading) {
    return (
      <Layout>
        <div className="space-y-6 animate-fade-in">
          <div className="text-center py-8">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground animate-pulse">Loading your dashboard...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Skeleton className="h-32 animate-pulse" />
            <Skeleton className="h-32 animate-pulse" />
            <Skeleton className="h-32 animate-pulse" />
          </div>
        </div>
      </Layout>
    );
  }

  if (!profile) {
    return (
      <Layout>
        <div className="text-center py-8">
          <p className="text-muted-foreground">Unable to load profile. Please try refreshing the page.</p>
        </div>
      </Layout>
    );
  }

  const renderDashboard = () => {
    switch (profile.role) {
      case 'admin':
        return <AdminDashboard />;
      case 'agent':
        return <AgentDashboard />;
      default:
        return <UserDashboard />;
    }
  };

  return (
    <Layout>
      <div className="animate-fade-in">
        {renderDashboard()}
      </div>
    </Layout>
  );
};

export default Dashboard;