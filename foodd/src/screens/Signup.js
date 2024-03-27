import React, { useState } from "react";
import { Link } from "react-router-dom";

import yumcourier from "../images/yumcourier-favicon-theme.png"

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
 
  Stack,
  Button,
  Heading,
 
  useColorModeValue,
  Image
} from '@chakra-ui/react'

export default function Signup() {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.location,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      {/* <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="location"
              value={credentials.location}
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn btn-warning">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already an user
          </Link>
        </form>
      </div> */}

      <div>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} backgroundColor={'white'}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
      <Stack spacing={8}  maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Image src={yumcourier} maxWidth={'100%'} objectFit={'fill'}></Image>
          <Heading fontSize={'2xl'} color={'#2A2C41'} margin={'1'}>Sign Up to Order</Heading>
          
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <form onSubmit={handleSubmit}>

            <FormControl id="name"
            >
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" value={credentials.name}
            onChange={onChange} focusBorderColor='#ff724c'
            />
            </FormControl>


            <FormControl id="email"
            >
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" value={credentials.email}
            onChange={onChange} focusBorderColor='#ff724c'/>
            </FormControl>
            
            <FormControl id="password"
            >
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" value={credentials.password}
            onChange={onChange} focusBorderColor='#ff724c'/>
            </FormControl>

            <FormControl id="name"
            >
              <FormLabel>Address</FormLabel>
              <Input type="text" name="location" value={credentials.location}
            onChange={onChange} focusBorderColor='#ff724c'/>
            </FormControl>


            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <br></br>
                <Link to="/login" color={'#FF724C'} className="link">Already An User?</Link>
              </Stack>
              <Button
              type="submit"
              
                bg={'#FF724C'}
                color={'white'}
                _hover={{
                  bg: '#ff6035',
                }}>
                Sign Up
              </Button>
              
            </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://source.unsplash.com/random/900x700/?burger'
          }
        />
      </Flex>
    </Stack>
      </div>
    </>
  );
}
