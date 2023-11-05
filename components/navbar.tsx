import React from "react";
import { SvgXml } from "react-native-svg";
import { View, Alert, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// import { useSelector } from "react-redux";
// import { State } from "../../storage/reducers";

export enum SvgType {
  Exibition,
  LightMap,
  DarkRoom,
  MyGallery,
}

interface SvgProps {
  type: SvgType;
}

type RootStackParamList = {
  // 로그인: undefined;
  Profile: undefined;
  LightMap: undefined;
  // LightMap: undefined;
  // DarkRoom: undefined;
  // MyGallery: undefined;
};

export const NavBar: React.FC<SvgProps> = ({ type }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  // const userId = useSelector((state: State) => state.USER);

  const markUp = [
    `
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.7 9.90439C24.8707 9.90443 25.0398 9.87243 25.1975 9.81023C25.3553 9.74802 25.4986 9.65682 25.6193 9.54184C25.7401 9.42686 25.8358 9.29036 25.9011 9.14012C25.9664 8.98989 26 8.82887 26 8.66626V4.95189C26.0001 4.6921 25.9143 4.43887 25.7548 4.22814C25.5953 4.0174 25.3702 3.85985 25.1113 3.77785L13.4113 0.0634779C13.1443 -0.0211593 12.8557 -0.0211593 12.5887 0.0634779L0.888667 3.77785C0.629841 3.85985 0.404701 4.0174 0.245188 4.22814C0.0856742 4.43887 -0.000111971 4.6921 1.09686e-07 4.95189V8.66626C-4.42977e-05 8.82887 0.033551 8.98989 0.0988664 9.14012C0.164182 9.29036 0.259937 9.42686 0.380662 9.54184C0.501387 9.65682 0.644716 9.74802 0.802459 9.81023C0.960202 9.87243 1.12927 9.90443 1.3 9.90439H2.6V18.7994C1.84176 19.0538 1.18477 19.5254 0.719247 20.1496C0.25372 20.7738 0.00247322 21.52 1.09686e-07 22.2856V24.7619C-4.42977e-05 24.9245 0.033551 25.0855 0.0988664 25.2357C0.164182 25.386 0.259937 25.5225 0.380662 25.6375C0.501387 25.7524 0.644716 25.8436 0.802459 25.9058C0.960202 25.968 1.12927 26 1.3 26H24.7C24.8707 26 25.0398 25.968 25.1975 25.9058C25.3553 25.8436 25.4986 25.7524 25.6193 25.6375C25.7401 25.5225 25.8358 25.386 25.9011 25.2357C25.9664 25.0855 26 24.9245 26 24.7619V22.2856C25.9975 21.52 25.7463 20.7738 25.2808 20.1496C24.8152 19.5254 24.1582 19.0538 23.4 18.7994V9.90439H24.7ZM23.4 23.5238H2.6V22.2856C2.60034 21.9574 2.73742 21.6426 2.98114 21.4105C3.22486 21.1784 3.55532 21.0478 3.9 21.0475H22.1C22.4447 21.0478 22.7751 21.1784 23.0189 21.4105C23.2626 21.6426 23.3997 21.9574 23.4 22.2856V23.5238ZM5.2 18.5713V9.90439H7.8V18.5713H5.2ZM10.4 18.5713V9.90439H15.6V18.5713H10.4ZM18.2 18.5713V9.90439H20.8V18.5713H18.2ZM2.6 7.42814V5.8442L13 2.54213L23.4 5.8442V7.42814H2.6Z" fill="black" />
    </svg>
    
    `,

    `
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.116 2.95972L17.316 0.0726091H17.225C17.1645 0.0658556 17.1035 0.0658556 17.043 0.0726091H16.744H16.575H16.484L9.1 2.88754L1.716 0.0726091C1.5205 0.00102552 1.31249 -0.0179806 1.10908 0.0171547C0.905671 0.0522901 0.712685 0.140563 0.546004 0.274707C0.37799 0.407537 0.240849 0.582852 0.14591 0.786168C0.0509703 0.989484 0.000958039 1.21497 4.33359e-06 1.44399V21.6537C-0.000699177 21.9564 0.0842689 22.2516 0.242899 22.4977C0.401529 22.7438 0.625797 22.9283 0.884004 23.0251L8.684 25.9122C8.94588 26.007 9.22812 26.007 9.49 25.9122L16.9 23.1695L24.284 25.9844C24.422 26.0052 24.562 26.0052 24.7 25.9844C24.9718 25.9886 25.2371 25.8921 25.454 25.7101C25.622 25.5773 25.7592 25.402 25.8541 25.1987C25.949 24.9953 25.999 24.7699 26 24.5408V4.33109C26.0007 4.02846 25.9157 3.73324 25.7571 3.48715C25.5985 3.24106 25.3742 3.05656 25.116 2.95972ZM7.8 22.5343L2.6 20.6144V3.45053L7.8 5.37045V22.5343ZM15.6 20.6144L10.4 22.5343V5.37045L15.6 3.45053V20.6144ZM23.4 22.5343L18.2 20.6144V3.45053L23.4 5.37045V22.5343Z" fill="black"/>
    </svg>
    
    `,
    `
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.4 14.3H1.3C0.955218 14.3 0.624558 14.437 0.380761 14.6808C0.136964 14.9246 0 15.2552 0 15.6V24.7C0 25.0448 0.136964 25.3754 0.380761 25.6192C0.624558 25.863 0.955218 26 1.3 26H10.4C10.7448 26 11.0754 25.863 11.3192 25.6192C11.563 25.3754 11.7 25.0448 11.7 24.7V15.6C11.7 15.2552 11.563 14.9246 11.3192 14.6808C11.0754 14.437 10.7448 14.3 10.4 14.3ZM9.1 23.4H2.6V16.9H9.1V23.4ZM24.7 0H15.6C15.2552 0 14.9246 0.136964 14.6808 0.380761C14.437 0.624558 14.3 0.955218 14.3 1.3V10.4C14.3 10.7448 14.437 11.0754 14.6808 11.3192C14.9246 11.563 15.2552 11.7 15.6 11.7H24.7C25.0448 11.7 25.3754 11.563 25.6192 11.3192C25.863 11.0754 26 10.7448 26 10.4V1.3C26 0.955218 25.863 0.624558 25.6192 0.380761C25.3754 0.136964 25.0448 0 24.7 0ZM23.4 9.1H16.9V2.6H23.4V9.1ZM24.7 14.3H15.6C15.2552 14.3 14.9246 14.437 14.6808 14.6808C14.437 14.9246 14.3 15.2552 14.3 15.6V24.7C14.3 25.0448 14.437 25.3754 14.6808 25.6192C14.9246 25.863 15.2552 26 15.6 26H24.7C25.0448 26 25.3754 25.863 25.6192 25.6192C25.863 25.3754 26 25.0448 26 24.7V15.6C26 15.2552 25.863 14.9246 25.6192 14.6808C25.3754 14.437 25.0448 14.3 24.7 14.3ZM23.4 23.4H16.9V16.9H23.4V23.4ZM10.4 0H1.3C0.955218 0 0.624558 0.136964 0.380761 0.380761C0.136964 0.624558 0 0.955218 0 1.3V10.4C0 10.7448 0.136964 11.0754 0.380761 11.3192C0.624558 11.563 0.955218 11.7 1.3 11.7H10.4C10.7448 11.7 11.0754 11.563 11.3192 11.3192C11.563 11.0754 11.7 10.7448 11.7 10.4V1.3C11.7 0.955218 11.563 0.624558 11.3192 0.380761C11.0754 0.136964 10.7448 0 10.4 0ZM9.1 9.1H2.6V2.6H9.1V9.1Z" fill="black"/>
    </svg>
    
    `,

    `
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.3916 17.1587C7.16396 17.3801 7.03619 17.6797 7.03619 17.9919C7.03619 18.3041 7.16396 18.6036 7.3916 18.8251C7.50522 18.9358 7.64039 19.0238 7.78933 19.0837C7.93826 19.1437 8.09801 19.1746 8.25935 19.1746C8.4207 19.1746 8.58044 19.1437 8.72938 19.0837C8.87831 19.0238 9.01349 18.9358 9.12711 18.8251C9.35474 18.6036 9.48251 18.3041 9.48251 17.9919C9.48251 17.6797 9.35474 17.3801 9.12711 17.1587C9.01349 17.0479 8.87831 16.96 8.72938 16.9C8.58044 16.84 8.4207 16.8091 8.25935 16.8091C8.09801 16.8091 7.93826 16.84 7.78933 16.9C7.64039 16.96 7.50522 17.0479 7.3916 17.1587ZM7.3916 7.12506C7.16396 7.34649 7.03619 7.64602 7.03619 7.95824C7.03619 8.27046 7.16396 8.57 7.3916 8.79142C7.50522 8.90219 7.64039 8.99011 7.78933 9.05011C7.93826 9.11011 8.09801 9.141 8.25935 9.141C8.4207 9.141 8.58044 9.11011 8.72938 9.05011C8.87831 8.99011 9.01349 8.90219 9.12711 8.79142C9.35474 8.57 9.48251 8.27046 9.48251 7.95824C9.48251 7.64602 9.35474 7.34649 9.12711 7.12506C9.01349 7.01429 8.87831 6.92637 8.72938 6.86637C8.58044 6.80637 8.4207 6.77548 8.25935 6.77548C8.09801 6.77548 7.93826 6.80637 7.78933 6.86637C7.64039 6.92637 7.50522 7.01429 7.3916 7.12506ZM13.4414 18.9432C13.1997 18.9432 12.9634 19.0126 12.7624 19.1424C12.5614 19.2723 12.4048 19.4568 12.3123 19.6728C12.2198 19.8887 12.1956 20.1264 12.2427 20.3556C12.2899 20.5849 12.4063 20.7955 12.5772 20.9607C12.7481 21.126 12.9659 21.2386 13.203 21.2842C13.4401 21.3298 13.6858 21.3064 13.9092 21.2169C14.1325 21.1275 14.3234 20.976 14.4577 20.7816C14.592 20.5873 14.6636 20.3588 14.6636 20.1251C14.6719 19.965 14.6464 19.8049 14.5887 19.6546C14.531 19.5044 14.4423 19.367 14.328 19.2509C14.2137 19.1348 14.0761 19.0425 13.9237 18.9794C13.7713 18.9164 13.6072 18.8839 13.4414 18.8841V18.9432ZM6.1083 11.8523C5.86657 11.8523 5.63027 11.9216 5.42929 12.0515C5.2283 12.1814 5.07165 12.3659 4.97914 12.5819C4.88664 12.7978 4.86243 13.0355 4.90959 13.2647C4.95675 13.494 5.07315 13.7045 5.24408 13.8698C5.41501 14.0351 5.63278 14.1477 5.86986 14.1933C6.10694 14.2389 6.35268 14.2155 6.57601 14.126C6.79934 14.0366 6.99022 13.8851 7.12451 13.6907C7.25881 13.4964 7.33049 13.2679 7.33049 13.0342C7.33878 12.8741 7.3133 12.714 7.2556 12.5637C7.1979 12.4134 7.10919 12.2761 6.99486 12.16C6.88053 12.0439 6.74298 11.9516 6.59057 11.8885C6.43816 11.8255 6.27407 11.793 6.1083 11.7932V11.8523ZM13.4414 4.76143C13.1997 4.76143 12.9634 4.83074 12.7624 4.9606C12.5614 5.09046 12.4048 5.27503 12.3123 5.49098C12.2198 5.70693 12.1956 5.94455 12.2427 6.1738C12.2899 6.40305 12.4063 6.61363 12.5772 6.77891C12.7481 6.94419 12.9659 7.05675 13.203 7.10235C13.4401 7.14795 13.6858 7.12455 13.9092 7.0351C14.1325 6.94565 14.3234 6.79417 14.4577 6.59983C14.592 6.40548 14.6636 6.17698 14.6636 5.94324C14.6719 5.78314 14.6464 5.62309 14.5887 5.47281C14.531 5.32254 14.4423 5.18518 14.328 5.0691C14.2137 4.95303 14.0761 4.86065 13.9237 4.7976C13.7713 4.73455 13.6072 4.70213 13.4414 4.70233V4.76143ZM17.768 7.18415C17.5963 7.34915 17.4792 7.55972 17.4315 7.78916C17.3837 8.0186 17.4075 8.25659 17.4998 8.47294C17.5921 8.6893 17.7487 8.87429 17.9499 9.00446C18.151 9.13463 18.3876 9.20412 18.6296 9.20412C18.8717 9.20412 19.1083 9.13463 19.3094 9.00446C19.5106 8.87429 19.6672 8.6893 19.7595 8.47294C19.8518 8.25659 19.8756 8.0186 19.8278 7.78916C19.7801 7.55972 19.6629 7.34915 19.4913 7.18415C19.2705 6.95601 18.9652 6.82171 18.6423 6.81064C18.3193 6.79956 18.005 6.91261 17.768 7.12506V7.18415ZM25.4678 7.18415C24.3504 5.02414 22.6328 3.20783 20.5076 1.93889C18.3825 0.66995 15.9338 -0.00144091 13.4361 2.32188e-06C10.9384 0.00144555 8.49049 0.675666 6.36689 1.94706C4.24329 3.21845 2.52796 5.03675 1.41323 7.19805C0.298502 9.35935 -0.171537 11.7782 0.055821 14.1834C0.283179 16.5885 1.19894 18.8849 2.70042 20.8149C4.20191 22.745 6.22973 24.2324 8.55652 25.1105C10.8833 25.9885 13.417 26.2224 15.8736 25.786C16.4913 25.6736 17.0797 25.4432 17.6044 25.1084C18.129 24.7736 18.5793 24.341 18.9291 23.836C19.3059 23.2869 19.566 22.6707 19.694 22.0235C19.822 21.3762 19.8154 20.7108 19.6746 20.066C19.5976 19.6763 19.5567 19.2808 19.5524 18.8841C19.5577 17.7389 19.9071 16.6199 20.5581 15.6631C21.209 14.7064 22.1335 13.9531 23.219 13.4951C23.8042 13.2417 24.3296 12.875 24.7626 12.4176C25.1956 11.9603 25.5271 11.422 25.7367 10.836C25.9486 10.2371 26.034 9.60323 25.9878 8.97187C25.9416 8.34051 25.7648 7.72455 25.4678 7.16052V7.18415ZM23.3901 10.0678C23.2858 10.3506 23.1239 10.6103 22.9139 10.8316C22.704 11.0529 22.4503 11.2312 22.1679 11.356C20.6646 12.0067 19.3874 13.0632 18.4899 14.3986C17.5923 15.734 17.1125 17.2915 17.108 18.8841C17.1098 19.4397 17.1671 19.9938 17.2791 20.5387C17.3538 20.8717 17.3587 21.2158 17.2936 21.5507C17.2286 21.8857 17.0948 22.2046 16.9002 22.4887C16.7356 22.7374 16.519 22.9499 16.2643 23.1128C16.0096 23.2756 15.7225 23.3851 15.4214 23.4342C14.7686 23.5528 14.1057 23.6121 13.4414 23.6114C11.9677 23.6121 10.5088 23.3264 9.15146 22.7713C7.79411 22.2162 6.56595 21.403 5.53993 20.38C4.51391 19.357 3.71095 18.1451 3.17873 16.8162C2.6465 15.4873 2.39588 14.0685 2.44173 12.6442C2.53658 9.98836 3.65048 7.46182 5.56642 5.55674C7.48235 3.65166 10.0631 2.50448 12.8059 2.3387H13.4292C15.4773 2.33919 17.4846 2.8926 19.225 3.93659C20.9654 4.98059 22.3698 6.4737 23.2801 8.24779C23.5603 8.80913 23.5998 9.45476 23.3901 10.0442V10.0678ZM13.4414 11.7932C13.1997 11.7932 12.9634 11.8626 12.7624 11.9924C12.5614 12.1223 12.4048 12.3068 12.3123 12.5228C12.2198 12.7387 12.1956 12.9764 12.2427 13.2056C12.2899 13.4349 12.4063 13.6455 12.5772 13.8107C12.7481 13.976 12.9659 14.0886 13.203 14.1342C13.4401 14.1798 13.6858 14.1564 13.9092 14.0669C14.1325 13.9775 14.3234 13.826 14.4577 13.6316C14.592 13.4373 14.6636 13.2088 14.6636 12.9751C14.6636 12.6616 14.5349 12.361 14.3057 12.1394C14.0765 11.9178 13.7656 11.7932 13.4414 11.7932Z" fill="black"/>
  </svg>

    `,
  ];

  switch (type) {
    case SvgType.Exibition:
      markUp[0] = `
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.7 9.90439C24.8707 9.90443 25.0398 9.87243 25.1975 9.81023C25.3553 9.74802 25.4986 9.65682 25.6193 9.54184C25.7401 9.42686 25.8358 9.29036 25.9011 9.14012C25.9664 8.98989 26 8.82887 26 8.66626V4.95189C26.0001 4.6921 25.9143 4.43887 25.7548 4.22814C25.5953 4.0174 25.3702 3.85985 25.1113 3.77785L13.4113 0.0634779C13.1443 -0.0211593 12.8557 -0.0211593 12.5887 0.0634779L0.888667 3.77785C0.629841 3.85985 0.404701 4.0174 0.245188 4.22814C0.0856742 4.43887 -0.000111971 4.6921 1.09686e-07 4.95189V8.66626C-4.42977e-05 8.82887 0.033551 8.98989 0.0988664 9.14012C0.164182 9.29036 0.259937 9.42686 0.380662 9.54184C0.501387 9.65682 0.644716 9.74802 0.802459 9.81023C0.960202 9.87243 1.12927 9.90443 1.3 9.90439H2.6V18.7994C1.84176 19.0538 1.18477 19.5254 0.719247 20.1496C0.25372 20.7738 0.00247322 21.52 1.09686e-07 22.2856V24.7619C-4.42977e-05 24.9245 0.033551 25.0855 0.0988664 25.2357C0.164182 25.386 0.259937 25.5225 0.380662 25.6375C0.501387 25.7524 0.644716 25.8436 0.802459 25.9058C0.960202 25.968 1.12927 26 1.3 26H24.7C24.8707 26 25.0398 25.968 25.1975 25.9058C25.3553 25.8436 25.4986 25.7524 25.6193 25.6375C25.7401 25.5225 25.8358 25.386 25.9011 25.2357C25.9664 25.0855 26 24.9245 26 24.7619V22.2856C25.9975 21.52 25.7463 20.7738 25.2808 20.1496C24.8152 19.5254 24.1582 19.0538 23.4 18.7994V9.90439H24.7ZM23.4 23.5238H2.6V22.2856C2.60034 21.9574 2.73742 21.6426 2.98114 21.4105C3.22486 21.1784 3.55532 21.0478 3.9 21.0475H22.1C22.4447 21.0478 22.7751 21.1784 23.0189 21.4105C23.2626 21.6426 23.3997 21.9574 23.4 22.2856V23.5238ZM5.2 18.5713V9.90439H7.8V18.5713H5.2ZM10.4 18.5713V9.90439H15.6V18.5713H10.4ZM18.2 18.5713V9.90439H20.8V18.5713H18.2ZM2.6 7.42814V5.8442L13 2.54213L23.4 5.8442V7.42814H2.6Z" fill="black"/>
      </svg>
      
      `;
      break;
    case SvgType.LightMap:
      markUp[1] = `     
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.116 2.95972L17.316 0.0726091H17.225C17.1645 0.0658556 17.1035 0.0658556 17.043 0.0726091H16.744H16.575H16.484L9.1 2.88754L1.716 0.0726091C1.5205 0.00102552 1.31249 -0.0179806 1.10908 0.0171547C0.905671 0.0522901 0.712685 0.140563 0.546004 0.274707C0.37799 0.407537 0.240849 0.582852 0.14591 0.786168C0.0509703 0.989484 0.000958039 1.21497 4.33359e-06 1.44399V21.6537C-0.000699177 21.9564 0.0842689 22.2516 0.242899 22.4977C0.401529 22.7438 0.625797 22.9283 0.884004 23.0251L8.684 25.9122C8.94588 26.007 9.22812 26.007 9.49 25.9122L16.9 23.1695L24.284 25.9844C24.422 26.0052 24.562 26.0052 24.7 25.9844C24.9718 25.9886 25.2371 25.8921 25.454 25.7101C25.622 25.5773 25.7592 25.402 25.8541 25.1987C25.949 24.9953 25.999 24.7699 26 24.5408V4.33109C26.0007 4.02846 25.9157 3.73324 25.7571 3.48715C25.5985 3.24106 25.3742 3.05656 25.116 2.95972ZM7.8 22.5343L2.6 20.6144V3.45053L7.8 5.37045V22.5343ZM15.6 20.6144L10.4 22.5343V5.37045L15.6 3.45053V20.6144ZM23.4 22.5343L18.2 20.6144V3.45053L23.4 5.37045V22.5343Z" fill="black"/>
    </svg>
      `;

      break;
    case SvgType.DarkRoom:
      markUp[2] = `
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.4 14.3H1.3C0.955218 14.3 0.624558 14.437 0.380761 14.6808C0.136964 14.9246 0 15.2552 0 15.6V24.7C0 25.0448 0.136964 25.3754 0.380761 25.6192C0.624558 25.863 0.955218 26 1.3 26H10.4C10.7448 26 11.0754 25.863 11.3192 25.6192C11.563 25.3754 11.7 25.0448 11.7 24.7V15.6C11.7 15.2552 11.563 14.9246 11.3192 14.6808C11.0754 14.437 10.7448 14.3 10.4 14.3ZM9.1 23.4H2.6V16.9H9.1V23.4ZM24.7 0H15.6C15.2552 0 14.9246 0.136964 14.6808 0.380761C14.437 0.624558 14.3 0.955218 14.3 1.3V10.4C14.3 10.7448 14.437 11.0754 14.6808 11.3192C14.9246 11.563 15.2552 11.7 15.6 11.7H24.7C25.0448 11.7 25.3754 11.563 25.6192 11.3192C25.863 11.0754 26 10.7448 26 10.4V1.3C26 0.955218 25.863 0.624558 25.6192 0.380761C25.3754 0.136964 25.0448 0 24.7 0ZM23.4 9.1H16.9V2.6H23.4V9.1ZM24.7 14.3H15.6C15.2552 14.3 14.9246 14.437 14.6808 14.6808C14.437 14.9246 14.3 15.2552 14.3 15.6V24.7C14.3 25.0448 14.437 25.3754 14.6808 25.6192C14.9246 25.863 15.2552 26 15.6 26H24.7C25.0448 26 25.3754 25.863 25.6192 25.6192C25.863 25.3754 26 25.0448 26 24.7V15.6C26 15.2552 25.863 14.9246 25.6192 14.6808C25.3754 14.437 25.0448 14.3 24.7 14.3ZM23.4 23.4H16.9V16.9H23.4V23.4ZM10.4 0H1.3C0.955218 0 0.624558 0.136964 0.380761 0.380761C0.136964 0.624558 0 0.955218 0 1.3V10.4C0 10.7448 0.136964 11.0754 0.380761 11.3192C0.624558 11.563 0.955218 11.7 1.3 11.7H10.4C10.7448 11.7 11.0754 11.563 11.3192 11.3192C11.563 11.0754 11.7 10.7448 11.7 10.4V1.3C11.7 0.955218 11.563 0.624558 11.3192 0.380761C11.0754 0.136964 10.7448 0 10.4 0ZM9.1 9.1H2.6V2.6H9.1V9.1Z" fill="black"/>
      </svg>   
      `;
      break;
    case SvgType.MyGallery:
      markUp[3] = `
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.3916 17.1587C7.16396 17.3801 7.03619 17.6797 7.03619 17.9919C7.03619 18.3041 7.16396 18.6036 7.3916 18.8251C7.50522 18.9358 7.64039 19.0238 7.78933 19.0837C7.93826 19.1437 8.09801 19.1746 8.25935 19.1746C8.4207 19.1746 8.58044 19.1437 8.72938 19.0837C8.87831 19.0238 9.01349 18.9358 9.12711 18.8251C9.35474 18.6036 9.48251 18.3041 9.48251 17.9919C9.48251 17.6797 9.35474 17.3801 9.12711 17.1587C9.01349 17.0479 8.87831 16.96 8.72938 16.9C8.58044 16.84 8.4207 16.8091 8.25935 16.8091C8.09801 16.8091 7.93826 16.84 7.78933 16.9C7.64039 16.96 7.50522 17.0479 7.3916 17.1587ZM7.3916 7.12506C7.16396 7.34649 7.03619 7.64602 7.03619 7.95824C7.03619 8.27046 7.16396 8.57 7.3916 8.79142C7.50522 8.90219 7.64039 8.99011 7.78933 9.05011C7.93826 9.11011 8.09801 9.141 8.25935 9.141C8.4207 9.141 8.58044 9.11011 8.72938 9.05011C8.87831 8.99011 9.01349 8.90219 9.12711 8.79142C9.35474 8.57 9.48251 8.27046 9.48251 7.95824C9.48251 7.64602 9.35474 7.34649 9.12711 7.12506C9.01349 7.01429 8.87831 6.92637 8.72938 6.86637C8.58044 6.80637 8.4207 6.77548 8.25935 6.77548C8.09801 6.77548 7.93826 6.80637 7.78933 6.86637C7.64039 6.92637 7.50522 7.01429 7.3916 7.12506ZM13.4414 18.9432C13.1997 18.9432 12.9634 19.0126 12.7624 19.1424C12.5614 19.2723 12.4048 19.4568 12.3123 19.6728C12.2198 19.8887 12.1956 20.1264 12.2427 20.3556C12.2899 20.5849 12.4063 20.7955 12.5772 20.9607C12.7481 21.126 12.9659 21.2386 13.203 21.2842C13.4401 21.3298 13.6858 21.3064 13.9092 21.2169C14.1325 21.1275 14.3234 20.976 14.4577 20.7816C14.592 20.5873 14.6636 20.3588 14.6636 20.1251C14.6719 19.965 14.6464 19.8049 14.5887 19.6546C14.531 19.5044 14.4423 19.367 14.328 19.2509C14.2137 19.1348 14.0761 19.0425 13.9237 18.9794C13.7713 18.9164 13.6072 18.8839 13.4414 18.8841V18.9432ZM6.1083 11.8523C5.86657 11.8523 5.63027 11.9216 5.42929 12.0515C5.2283 12.1814 5.07165 12.3659 4.97914 12.5819C4.88664 12.7978 4.86243 13.0355 4.90959 13.2647C4.95675 13.494 5.07315 13.7045 5.24408 13.8698C5.41501 14.0351 5.63278 14.1477 5.86986 14.1933C6.10694 14.2389 6.35268 14.2155 6.57601 14.126C6.79934 14.0366 6.99022 13.8851 7.12451 13.6907C7.25881 13.4964 7.33049 13.2679 7.33049 13.0342C7.33878 12.8741 7.3133 12.714 7.2556 12.5637C7.1979 12.4134 7.10919 12.2761 6.99486 12.16C6.88053 12.0439 6.74298 11.9516 6.59057 11.8885C6.43816 11.8255 6.27407 11.793 6.1083 11.7932V11.8523ZM13.4414 4.76143C13.1997 4.76143 12.9634 4.83074 12.7624 4.9606C12.5614 5.09046 12.4048 5.27503 12.3123 5.49098C12.2198 5.70693 12.1956 5.94455 12.2427 6.1738C12.2899 6.40305 12.4063 6.61363 12.5772 6.77891C12.7481 6.94419 12.9659 7.05675 13.203 7.10235C13.4401 7.14795 13.6858 7.12455 13.9092 7.0351C14.1325 6.94565 14.3234 6.79417 14.4577 6.59983C14.592 6.40548 14.6636 6.17698 14.6636 5.94324C14.6719 5.78314 14.6464 5.62309 14.5887 5.47281C14.531 5.32254 14.4423 5.18518 14.328 5.0691C14.2137 4.95303 14.0761 4.86065 13.9237 4.7976C13.7713 4.73455 13.6072 4.70213 13.4414 4.70233V4.76143ZM17.768 7.18415C17.5963 7.34915 17.4792 7.55972 17.4315 7.78916C17.3837 8.0186 17.4075 8.25659 17.4998 8.47294C17.5921 8.6893 17.7487 8.87429 17.9499 9.00446C18.151 9.13463 18.3876 9.20412 18.6296 9.20412C18.8717 9.20412 19.1083 9.13463 19.3094 9.00446C19.5106 8.87429 19.6672 8.6893 19.7595 8.47294C19.8518 8.25659 19.8756 8.0186 19.8278 7.78916C19.7801 7.55972 19.6629 7.34915 19.4913 7.18415C19.2705 6.95601 18.9652 6.82171 18.6423 6.81064C18.3193 6.79956 18.005 6.91261 17.768 7.12506V7.18415ZM25.4678 7.18415C24.3504 5.02414 22.6328 3.20783 20.5076 1.93889C18.3825 0.66995 15.9338 -0.00144091 13.4361 2.32188e-06C10.9384 0.00144555 8.49049 0.675666 6.36689 1.94706C4.24329 3.21845 2.52796 5.03675 1.41323 7.19805C0.298502 9.35935 -0.171537 11.7782 0.055821 14.1834C0.283179 16.5885 1.19894 18.8849 2.70042 20.8149C4.20191 22.745 6.22973 24.2324 8.55652 25.1105C10.8833 25.9885 13.417 26.2224 15.8736 25.786C16.4913 25.6736 17.0797 25.4432 17.6044 25.1084C18.129 24.7736 18.5793 24.341 18.9291 23.836C19.3059 23.2869 19.566 22.6707 19.694 22.0235C19.822 21.3762 19.8154 20.7108 19.6746 20.066C19.5976 19.6763 19.5567 19.2808 19.5524 18.8841C19.5577 17.7389 19.9071 16.6199 20.5581 15.6631C21.209 14.7064 22.1335 13.9531 23.219 13.4951C23.8042 13.2417 24.3296 12.875 24.7626 12.4176C25.1956 11.9603 25.5271 11.422 25.7367 10.836C25.9486 10.2371 26.034 9.60323 25.9878 8.97187C25.9416 8.34051 25.7648 7.72455 25.4678 7.16052V7.18415ZM23.3901 10.0678C23.2858 10.3506 23.1239 10.6103 22.9139 10.8316C22.704 11.0529 22.4503 11.2312 22.1679 11.356C20.6646 12.0067 19.3874 13.0632 18.4899 14.3986C17.5923 15.734 17.1125 17.2915 17.108 18.8841C17.1098 19.4397 17.1671 19.9938 17.2791 20.5387C17.3538 20.8717 17.3587 21.2158 17.2936 21.5507C17.2286 21.8857 17.0948 22.2046 16.9002 22.4887C16.7356 22.7374 16.519 22.9499 16.2643 23.1128C16.0096 23.2756 15.7225 23.3851 15.4214 23.4342C14.7686 23.5528 14.1057 23.6121 13.4414 23.6114C11.9677 23.6121 10.5088 23.3264 9.15146 22.7713C7.79411 22.2162 6.56595 21.403 5.53993 20.38C4.51391 19.357 3.71095 18.1451 3.17873 16.8162C2.6465 15.4873 2.39588 14.0685 2.44173 12.6442C2.53658 9.98836 3.65048 7.46182 5.56642 5.55674C7.48235 3.65166 10.0631 2.50448 12.8059 2.3387H13.4292C15.4773 2.33919 17.4846 2.8926 19.225 3.93659C20.9654 4.98059 22.3698 6.4737 23.2801 8.24779C23.5603 8.80913 23.5998 9.45476 23.3901 10.0442V10.0678ZM13.4414 11.7932C13.1997 11.7932 12.9634 11.8626 12.7624 11.9924C12.5614 12.1223 12.4048 12.3068 12.3123 12.5228C12.2198 12.7387 12.1956 12.9764 12.2427 13.2056C12.2899 13.4349 12.4063 13.6455 12.5772 13.8107C12.7481 13.976 12.9659 14.0886 13.203 14.1342C13.4401 14.1798 13.6858 14.1564 13.9092 14.0669C14.1325 13.9775 14.3234 13.826 14.4577 13.6316C14.592 13.4373 14.6636 13.2088 14.6636 12.9751C14.6636 12.6616 14.5349 12.361 14.3057 12.1394C14.0765 11.9178 13.7656 11.7932 13.4414 11.7932Z" fill="black"/>
      </svg>
      `;
      break;
  }

  return (
    <View style={styles.container}>
      {markUp.map((item, i) => {
        return (
          <TouchableOpacity
            style={styles.nav_contents_box}
            key={i}
            onPress={() => {
              if (i === 0) {
                navigation.navigate("Profile");
              } else if (i === 1) {
                navigation.navigate("LightMap");
                // if (userId === null) {
                //   Alert.alert(
                //     "알림",
                //     "로그인 후 사용 가능합니다.",
                //     [
                //       {
                //         text: "취소",
                //         onPress: () => navigation.navigate("EveryHere"),
                //       },
                //       {
                //         text: "로그인",
                //         onPress: () => navigation.replace("로그인"),
                //       },
                //     ],
                //     { cancelable: false }
                //   );
                // }
              } else if (i === 2) {
                navigation.navigate("Profile");
                // if (userId === null) {
                //   Alert.alert(
                //     "알림",
                //     "로그인 후 사용 가능합니다.",
                //     [
                //       {
                //         text: "취소",
                //         onPress: () => navigation.navigate("EveryHere"),
                //       },
                //       {
                //         text: "로그인",
                //         onPress: () => navigation.replace("로그인"),
                //       },
                //     ],
                //     { cancelable: false }
                //   );
                // }
              } else {
                navigation.navigate("Profile");
                // if (userId === null) {
                //   Alert.alert(
                //     "알림",
                //     "로그인 후 사용 가능합니다.",
                //     [
                //       {
                //         text: "취소",

                //         onPress: () => navigation.navigate("EveryHere"),
                //       },
                //       {
                //         text: "로그인",
                //         onPress: () => navigation.replace("로그인"),
                //       },
                //     ],
                //     { cancelable: false }
                //   );
                // }
              }
            }}
          >
            <SvgXml xml={item} style={styles.xml_style} />
            {i === 0 ? (
              <Text style={{ ...styles.nav_text, color: "black" }}>
                Exibition
              </Text>
            ) : i === 1 ? (
              <Text style={{ ...styles.nav_text, color: "black" }}>
                Light Map
              </Text>
            ) : i === 2 ? (
              <Text style={{ ...styles.nav_text, color: "black" }}>
                Dark Room
              </Text>
            ) : (
              <Text style={{ ...styles.nav_text, color: "black" }}>
                My Gallery
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 70,
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingHorizontal: 27,
    paddingVertical: 5,
  },
  xml_style: {
    width: "100%",
    height: "100%",
  },
  nav_contents_box: {
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
  },
  nav_text: {
    fontSize: 12,
  },
});
