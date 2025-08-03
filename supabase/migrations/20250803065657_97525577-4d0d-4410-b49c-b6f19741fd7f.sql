-- Fix missing foreign key constraints for better data integrity

-- Add foreign key constraints for tickets table
ALTER TABLE public.tickets 
ADD CONSTRAINT tickets_category_id_fkey 
FOREIGN KEY (category_id) REFERENCES public.categories(id) ON DELETE SET NULL,
ADD CONSTRAINT tickets_created_by_fkey 
FOREIGN KEY (created_by) REFERENCES public.profiles(id) ON DELETE CASCADE,
ADD CONSTRAINT tickets_assigned_to_fkey 
FOREIGN KEY (assigned_to) REFERENCES public.profiles(id) ON DELETE SET NULL;

-- Add foreign key constraints for ticket_comments table
ALTER TABLE public.ticket_comments 
ADD CONSTRAINT ticket_comments_ticket_id_fkey 
FOREIGN KEY (ticket_id) REFERENCES public.tickets(id) ON DELETE CASCADE,
ADD CONSTRAINT ticket_comments_user_id_fkey 
FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE CASCADE;