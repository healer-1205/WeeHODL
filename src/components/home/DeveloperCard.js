import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: rgba(13,20,46,1);
  padding: 10px;
  font-family: Raleway,sans-serif;
`;

const CardTitle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NameWrapper = styled.div`
  
`;

const Description = styled.p`
  color: #fff;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const DeveloperCard = (props) => {
  return (
    <Card>
      <CardTitle>
        <img src={props.img} width="90" style={{ borderRadius: "50px"}} alt="developerImg"/>
        <NameWrapper>
          <h5 style={{ color: "rgba(41,169,235,1)" }}>{props.name}</h5>
          <p style={{ color: "#fff" }}>{props.title}</p>
        </NameWrapper>
      </CardTitle>
      <Description>{props.description}</Description>
    </Card>
  );
};