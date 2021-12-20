import styled from "styled-components";
import Icon from "@mdi/react";
import { mdiInformation } from "@mdi/js";

export type InfoProps = {
  title: string,
  description: string
}

export default function Info({ description, title }: InfoProps) {
  return (
    <InfoWrapper>
      <InfoInnerContent>
        <InfoIcon>
          <Icon path={mdiInformation} color="#09F" size="48px" />
        </InfoIcon>
        <InfoMessages>
          <InfoTitle>{title}</InfoTitle>
          <p>{description}</p>
        </InfoMessages>
      </InfoInnerContent>
    </InfoWrapper>
  )
}

const InfoWrapper = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F3F8FA;
  width: 373px;
`

const InfoInnerContent = styled.div`
  display: flex;
  gap: 24px;
  color: #274060;
`

export const InfoIcon = styled.div`  
`

export const InfoMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const InfoTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;
`
