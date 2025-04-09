
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Google, Facebook, Github, X, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { toast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
}

const SignUp = () => {
  const form = useForm<SignUpFormValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
    },
  });

  const onSubmit = (data: SignUpFormValues) => {
    console.log('Sign up data:', data);
    if (data.password !== data.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    // For demonstration purposes, show a success toast
    toast({
      title: "Account created!",
      description: "This is a demo. Authentication is not yet implemented.",
      duration: 3000,
    });
  };

  const handleSocialSignUp = (provider: string) => {
    console.log(`Sign up with ${provider}`);
    toast({
      title: `${provider} Sign Up`,
      description: `Sign up with ${provider} is not yet implemented.`,
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
            <h2 className="mt-6 text-3xl font-display font-bold text-cityNavy">Create Account</h2>
            <p className="mt-2 text-sm text-cityGray">Sign up to start exploring amazing destinations</p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 h-5 w-5 text-cityGray" />
                        <FormControl>
                          <Input 
                            placeholder="John Smith" 
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
                
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
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
                
                <FormField
                  control={form.control}
                  name="agreeTerms"
                  render={({ field }) => (
                    <div className="flex items-center">
                      <Checkbox 
                        id="agreeTerms"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        required
                      />
                      <label htmlFor="agreeTerms" className="ml-2 block text-sm text-cityGray">
                        I agree to the <Link to="/terms" className="text-cityBlue hover:text-cityNavy">Terms of Service</Link> and <Link to="/privacy" className="text-cityBlue hover:text-cityNavy">Privacy Policy</Link>
                      </label>
                    </div>
                  )}
                />
              </div>
              
              <Button type="submit" className="w-full">
                Create Account
              </Button>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-cityGray">
                  Already have an account?{' '}
                  <Link to="/sign-in" className="font-medium text-cityBlue hover:text-cityNavy">
                    Sign in
                  </Link>
                </p>
              </div>
              
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-cityGray">Or sign up with</span>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => handleSocialSignUp('Facebook')}
                    className="w-full"
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                  
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => handleSocialSignUp('Google')}
                    className="w-full"
                  >
                    <Google className="h-5 w-5" />
                  </Button>
                  
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => handleSocialSignUp('GitHub')}
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

export default SignUp;
