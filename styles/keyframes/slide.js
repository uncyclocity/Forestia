import { keyframes } from "styled-components";

export const slideUp = keyframes`
  from { 
    transform: translateY(10px);
    opacity: 0;
   }
  to { 
    transform: translateY(0px);
    opacity: 1;
   }
`;

export const slideDown = keyframes`
  from { 
    transform: translateY(0px);
    opacity: 1;
   }
  to { 
    transform: translateY(5px);
    opacity: 0;
   }
`;
