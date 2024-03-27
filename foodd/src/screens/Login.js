import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import yumcourier from "../images/yumcourier-favicon-theme.png"


import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,

  useColorModeValue,
  Image
} from '@chakra-ui/react'


export default function Login() {
  
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://yumcourier-backend1.onrender.com/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    } else {
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");

    }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* <div className="login-page">
        <img className="" alt="" src="../images/curve.png" />
        <section className="login-page-child">
          <h1 className="welcome-back">Welcome Back</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="field-1"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={onChange}
              placeholder="you@yourmail.com"
            />

            <input
              type="password"
              className="field-2"
              id="exampleInputPassword1"
              name="password"
              value={credentials.password}
              onChange={onChange}
              placeholder="Enter Your Password"
            />

            <button type="submit" className="next">
              <div className="next-child" />
              <div className="next1">Submit</div>
            </button>
            <Link to="/createuser" className="m-3 btn btn-success next">
              I am a new user
            </Link>
          </form>
        </section>
      </div> */}

    

      


      {/* <div>
      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      backgroundImage={yumcourier}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
      </div> */}


      <div>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} backgroundColor={'white'}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
      <Stack spacing={8}  maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Image src={yumcourier} maxWidth={'100%'} objectFit={'fill'}></Image>
          <Heading fontSize={'2xl'} color={'#2A2C41'} margin={'1'}>Sign in to Order</Heading>
          
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <form onSubmit={handleSubmit}>
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
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link to="/createuser" color={'#FF724C'} className="link">New User?</Link>
              </Stack>
              <Button
              type="submit"
              
                bg={'#FF724C'}
                color={'white'}
                _hover={{
                  bg: '#ff6035',
                }}>
                Sign in
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
      {/* <div>
      <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 fw-bold mb-0">Logo</span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Login</MDBBtn>
            <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p>
            <p className='ms-5'>Don't have an account? <a href="#!" class="link-info">Register here</a></p>

          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
      </div>

      <div>

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className='form mb-5' >
                <div className='form__group'>
                  <input
                    type='email'
                    placeholder='Email'
                    
                  ></input>
                </div>
                <div className='form__group'>
                  <input
                    type='password'
                    placeholder='Password'
                    
                  ></input>
                </div>
                <button type='submit' className='addToCart__btn'>
                  Login
                </button>
              </form>
              <Link to='/signup'>First time here? Create an account</Link>
            </Col>
          </Row>
        </Container>
      </section>
      </div> */}
    </>
  );
}
