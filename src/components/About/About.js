import { Card } from "react-bootstrap"

export const About = () => {
  return (
    <div className="itemDetail">
      <Card style={{ width: '600px' }}>
        <div className='itemDetail__imageContent'>
          <img className='itemDetail__image' src='https://i.picsum.photos/id/1079/4496/3000.jpg?hmac=G-dJcpU08vEMqjUz2rb3IxjOG99rcePqW9BF1IsPLf0' alt='' />
        </div>
        <Card.Body>
          <Card.Title>Nuestra Compañia</Card.Title>
          <Card.Text className='itemDetail__summary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}