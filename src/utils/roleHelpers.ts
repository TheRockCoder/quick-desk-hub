export const getRoleDisplayName = (role: string) => {
  switch (role) {
    case 'admin':
      return 'Administrator';
    case 'agent':
      return 'Support Agent';
    case 'user':
    default:
      return 'User';
  }
};

export const getRoleBadgeColor = (role: string) => {
  switch (role) {
    case 'admin':
      return 'destructive';
    case 'agent':
      return 'default';
    case 'user':
    default:
      return 'secondary';
  }
};

export const canManageTickets = (role: string) => {
  return role === 'admin' || role === 'agent';
};

export const canManageUsers = (role: string) => {
  return role === 'admin';
};