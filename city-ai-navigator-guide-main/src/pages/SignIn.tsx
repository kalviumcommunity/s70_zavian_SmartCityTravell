import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Facebook, Github, X, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { toast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface SignInFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const SignIn = () => {
  const form = useForm<SignInFormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = (data: SignInFormValues) => {
    console.log('Sign in data:', data);
    // For demonstration purposes, just show a success toast
    toast({
      title: "Sign in attempted",
      description: "This is a demo. Authentication is not yet implemented.",
      duration: 3000,
    });
  };

  const handleSocialSignIn = (provider: string) => {
    console.log(`Sign in with ${provider}`);
    toast({
      title: `${provider} Sign In`,
      description: `Sign in with ${provider} is not yet implemented.`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
          <div className="text-center">
            <Link to="/" className="inline-block">
              <ArrowLeft className="h-5 w-5 text-cityNavy inline mr-2" />
              <span className="text-cityNavy">Back to Home</span>
            </Link>
            <h2 className="mt-6 text-3xl font-display font-bold text-cityNavy">Welcome Back</h2>
            <p className="mt-2 text-sm text-cityGray">Sign in to your account to continue your journey</p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-cityGray" />
                        <FormControl>
                          <Input 
                            placeholder="your@email.com" 
                            type="email" 
                            className="pl-10" 
                            required
                            {...field} 
                          />
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <div className="relative">
                        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-cityGray" />
                        <FormControl>
                          <Input 
                            placeholder="••••••••" 
                            type="password" 
                            className="pl-10" 
                            required
                            {...field} 
                          />
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
                
                <div className="flex items-center justify-between">
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <div className="flex items-center">
                        <Checkbox 
                          id="rememberMe"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <label htmlFor="rememberMe" className="ml-2 block text-sm text-cityGray">
                          Remember me
                        </label>
                      </div>
                    )}
                  />
                  
                  <div className="text-sm">
                    <Link to="/forgot-password" className="font-medium text-cityBlue hover:text-cityNavy">
                      Forgot your password?
                    </Link>
                  </div>
                </div>
              </div>
              
              <Button type="submit" className="w-full">
                Sign In
              </Button>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-cityGray">
                  Don't have an account?{' '}
                  <Link to="/sign-up" className="font-medium text-cityBlue hover:text-cityNavy">
                    Sign up
                  </Link>
                </p>
              </div>
              
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-cityGray">Or continue with</span>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => handleSocialSignIn('Facebook')}
                    className="w-full"
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                  
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => handleSocialSignIn('Twitter')}
                    className="w-full"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                  
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => handleSocialSignIn('GitHub')}
                    className="w-full"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SignIn;
