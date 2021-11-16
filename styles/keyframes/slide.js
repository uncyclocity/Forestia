import { keyframes } from 'styled-components';

export const slideUpInit = keyframes`
  from { 
    transform: translateY(5px);
    opacity: 0;
   }
  to { 
    transform: translateY(0px);
    opacity: 1;
   }
`;

export const slideUp = keyframes`
  from { 
    transform: translateY(0px);
    opacity: 1;
   }
  to { 
    transform: translateY(-5px);
    opacity: 0;
   }
`;

export const slideDown = keyframes`
  from { 
    transform: translateY(-5px);
    opacity: 0;
   }
  to { 
    transform: translateY(0px);
    opacity: 1;
   }
`;

export const slideLeft = keyframes`
  from {
    transform: translateX(0px);
    opacity: 1;
   }
  to {
    transform: translateX(-5px);
    opacity: 0;
   }
`;

export const slideRight = keyframes`
  from {
    transform: translateX(-5px);
    opacity: 0;
   }
  to {
    transform: translateX(0px);
    opacity: 1;
   }
`;
