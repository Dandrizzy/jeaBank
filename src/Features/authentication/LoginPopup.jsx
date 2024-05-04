import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';
import { useLogin } from "./useLogin";
import SpinnerMini from '@/ui/SpinnerMini';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useGet } from '@/Hooks/Get/useGet';
import { useGetApi } from '@/Hooks/Get/useGetApi';
import Spinner from '@/ui/Spinner';
import emailjs from '@emailjs/browser';
import { useEditApi } from '@/Hooks/Edit/useEditApi';
import { useEdit } from '@/Hooks/Edit/useEdit';
import { array } from '@/Data/array';

// Generate a random number between 600000 and 900000
const randomNumber = Math.floor(Math.random() * (900000 - 600000 + 1)) + 600000;

function LoginPopup() {
  const form = useRef();
  const [random, setRandom] = useState(randomNumber);
  const { fetch: fn } = useGetApi({ key: 'otp' });
  const { fetch: OTP, isFetching } = useGet({ key: ['otp'], fn });
  const [otp, setOtp] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const { login, isLoading } = useLogin({ route: '/dashboard' });
  const { editFn } = useEditApi({ id: 1, key: 'otp' });
  const { edit, isEditing } = useEdit({ key: ['otp'], fn: editFn });
  if (isFetching) return <Spinner />;



  const sendOTP = () => {





    edit({ otp: randomNumber }, {
      onSuccess: () => {
        emailjs.sendForm('service_12gc96p', 'template_45dax5g', form.current, 'IOS956p3P7Bc735Gk')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error);
          });
      }
    });

  };

  const onSubmit = (data) => {

    const stringToFind = data?.email;
    const found = array.map(str => str.toLowerCase()).includes(stringToFind.toLowerCase());


    if (found) {
      login(
        data,
        {
          onSuccess: () => {
            reset();
          },
        }
      );
      return;
    }

    setOtp(true);
    if (!data) return;
    if (!data.otp) return;
    if (+data.otp != +OTP?.at(0)?.otp) {
      toast.error('Please confirm your OTP code');
      return;
    }

    login(
      data,
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };


  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button variant='ghost'>

            <span className="text-sm font-semibold leading-6 text-gray-900">
              Login <span aria-hidden="true">&rarr;</span>
            </span>

          </Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: '450px' }}>
          <Dialog.Title>Log In</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Login to your account
          </Dialog.Description>

          <Form ref={form} >
            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Email
                </Text>
                <TextField.Input name='email'
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Please provide a valid email address",
                    },
                  })}
                  required
                  id='email'
                  type='text'
                  placeholder="example@email.com"
                />
              </label>
              <label className=' hidden'>
                <Text as="div" size="2" mb="1" weight="bold">
                  OTP
                </Text>
                <TextField.Input name='otp'
                  onChange={(e) => setRandom(e.target.value)}
                  value={random}
                  type='number'

                />
              </label>

              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Password
                </Text>
                <TextField.Input
                  required
                  {...register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 8,
                      message: "Password needs a minimum of 8 characters",
                    },
                  })}
                  id='password'
                  type='password'
                  placeholder="Enter your password"
                />
              </label>
              {otp && <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  OTP
                </Text>
                <TextField.Input

                  {...register("otp", {

                    minLength: {
                      value: 6,
                      message: "OTP needs a minimum of 6 characters",
                    },
                  })}
                  id='otp'
                  type='number'
                  placeholder="Enter your password"
                />
              </label>}
              {otp && <Flex gap="3" mt="4" justify="end">
                {/* <Dialog.Close>
        <Button variant="soft" color="gray">
         Cancel
        </Button>
       </Dialog.Close> */}

                <Button onClick={handleSubmit(sendOTP)} color='green'>{isEditing ? <SpinnerMini /> : 'Send OTP'}</Button>

              </Flex>}
              <Button mt='4' onClick={handleSubmit(onSubmit)} color='green'>{isLoading ? <SpinnerMini /> : 'Log in'}</Button>
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
            </Flex>


          </Form>
        </Dialog.Content>
      </Dialog.Root>

    </>
  );
}

export default LoginPopup;
