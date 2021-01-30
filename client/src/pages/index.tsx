import { Center, Heading, Button } from "mauinz";
import { useMeLazyQuery } from "../generated/codegen";

export default function Home() {
  const [getMe, { data }] = useMeLazyQuery({ fetchPolicy: 'no-cache' });

  return (
    <Center flexDirection='column' h='100vh'>
      <Heading>Hello World</Heading>
      <Button variant='primary' onClick={() => getMe()}>Who am i?</Button>
      <Heading>{data && `Name: ${data.me.name}, Id: ${data.me.id}`}</Heading>
    </Center>
  )
}
