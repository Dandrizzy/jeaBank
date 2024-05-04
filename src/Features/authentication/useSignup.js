import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signup as signupApi } from '../../Services/apiAuth';
import { toast } from 'react-hot-toast';

export function useSignup() {
  const queryClient = useQueryClient();
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        ` account successfully created! Please verify the new account from the user's email address.`
      );
      queryClient.invalidateQueries({ queryKey: ['adminUsers'] });
    },
  });

  return { signup, isLoading };
}
