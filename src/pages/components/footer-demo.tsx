import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { SVGProps } from "react";

const navigation = {
  solutions: [
    { name: 'Overview', href: '/' },
    { name: 'Use Cases', href: '#' },
  ],
  support: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        // <svg fill="blue" viewBox="0 0 24 24" {...props}>
        //   <path
        //     fillRule="evenodd"
        //     d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        //     clipRule="evenodd"
        //   />
        // </svg>
        // <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        //   <path d="M20 16.352C20 19.264 18.264 21 15.352 21H14.4C13.96 21 13.6 20.64 13.6 20.2V15.584C13.6 15.368 13.776 15.184 13.992 15.184L15.4 15.16C15.512 15.152 15.608 15.072 15.632 14.96L15.912 13.432C15.936 13.288 15.824 13.152 15.672 13.152L13.968 13.176C13.744 13.176 13.568 13 13.56 12.784L13.528 10.824C13.528 10.696 13.632 10.584 13.768 10.584L15.688 10.552C15.824 10.552 15.928 10.448 15.928 10.312L15.896 8.39199C15.896 8.25599 15.792 8.152 15.656 8.152L13.496 8.18401C12.168 8.20801 11.112 9.296 11.136 10.624L11.176 12.824C11.184 13.048 11.008 13.224 10.784 13.232L9.824 13.248C9.688 13.248 9.58401 13.352 9.58401 13.488L9.60801 15.008C9.60801 15.144 9.712 15.248 9.848 15.248L10.808 15.232C11.032 15.232 11.208 15.408 11.216 15.624L11.288 20.184C11.296 20.632 10.936 21 10.488 21H8.648C5.736 21 4 19.264 4 16.344V9.648C4 6.736 5.736 5 8.648 5H15.352C18.264 5 20 6.736 20 9.648V16.352Z" fill="#1877F2" />
        // </svg>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.890625" width="24" height="24" rx="4" fill="#F4F6FF" />
          <path d="M20 16.352C20 19.264 18.264 21 15.352 21H14.4C13.96 21 13.6 20.64 13.6 20.2V15.584C13.6 15.368 13.776 15.184 13.992 15.184L15.4 15.16C15.512 15.152 15.608 15.072 15.632 14.96L15.912 13.432C15.936 13.288 15.824 13.152 15.672 13.152L13.968 13.176C13.744 13.176 13.568 13 13.56 12.784L13.528 10.824C13.528 10.696 13.632 10.584 13.768 10.584L15.688 10.552C15.824 10.552 15.928 10.448 15.928 10.312L15.896 8.39199C15.896 8.25599 15.792 8.152 15.656 8.152L13.496 8.18401C12.168 8.20801 11.112 9.296 11.136 10.624L11.176 12.824C11.184 13.048 11.008 13.224 10.784 13.232L9.824 13.248C9.688 13.248 9.58401 13.352 9.58401 13.488L9.60801 15.008C9.60801 15.144 9.712 15.248 9.848 15.248L10.808 15.232C11.032 15.232 11.208 15.408 11.216 15.624L11.288 20.184C11.296 20.632 10.936 21 10.488 21H8.648C5.736 21 4 19.264 4 16.344V9.648C4 6.736 5.736 5 8.648 5H15.352C18.264 5 20 6.736 20 9.648V16.352Z" fill="#1877F2" />
        </svg>

      ),
    },
    {
      name: 'Instagram',
      href: '#',
      // logo :(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      //         <svg fill="green" viewBox="0 0 24 24" {...props}>
      //     <path
      //       fillRule="evenodd"
      //       d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
      //       clipRule="evenodd"
      //     />
      //   </svg>
      // ),
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.890625" width="24" height="24" rx="4" fill="#F4F6FF"/>
        <path d="M15.3577 5H8.65032C5.73687 5 4 6.736 4 9.648V16.344C4 19.264 5.73687 21 8.65032 21H15.3497C18.2631 21 20 19.264 20 16.352V9.648C20.008 6.736 18.2711 5 15.3577 5ZM12.004 16.104C10.2911 16.104 8.89844 14.712 8.89844 13C8.89844 11.288 10.2911 9.896 12.004 9.896C13.7168 9.896 15.1095 11.288 15.1095 13C15.1095 14.712 13.7168 16.104 12.004 16.104ZM16.7423 8.904C16.7023 9 16.6463 9.088 16.5743 9.168C16.4942 9.24 16.4062 9.296 16.3101 9.336C16.2141 9.376 16.11 9.4 16.006 9.4C15.7899 9.4 15.5898 9.32 15.4377 9.168C15.3657 9.088 15.3096 9 15.2696 8.904C15.2296 8.808 15.2056 8.704 15.2056 8.6C15.2056 8.496 15.2296 8.392 15.2696 8.296C15.3096 8.192 15.3657 8.112 15.4377 8.032C15.6218 7.848 15.9019 7.76 16.1581 7.816C16.2141 7.824 16.2621 7.84 16.3101 7.864C16.3582 7.88 16.4062 7.904 16.4542 7.936C16.4942 7.96 16.5342 8 16.5743 8.032C16.6463 8.112 16.7023 8.192 16.7423 8.296C16.7824 8.392 16.8064 8.496 16.8064 8.6C16.8064 8.704 16.7824 8.808 16.7423 8.904Z" fill="url(#paint0_linear_1099_17940)"/>
        <g clip-path="url(#clip0_1099_17940)">
        <path d="M16.25 5H7.75C5.67893 5 4 6.67893 4 8.75V17.25C4 19.3211 5.67893 21 7.75 21H16.25C18.3211 21 20 19.3211 20 17.25V8.75C20 6.67893 18.3211 5 16.25 5Z" fill="url(#paint1_radial_1099_17940)"/>
        <path d="M16.25 5H7.75C5.67893 5 4 6.67893 4 8.75V17.25C4 19.3211 5.67893 21 7.75 21H16.25C18.3211 21 20 19.3211 20 17.25V8.75C20 6.67893 18.3211 5 16.25 5Z" fill="url(#paint2_radial_1099_17940)"/>
        <path d="M12.0006 6.75C10.3032 6.75 10.0901 6.75744 9.4235 6.78775C8.75813 6.81825 8.30394 6.92356 7.90656 7.07812C7.49544 7.23775 7.14675 7.45131 6.79938 7.79881C6.45169 8.14625 6.23813 8.49494 6.078 8.90587C5.923 9.30338 5.81756 9.75775 5.78762 10.4228C5.75781 11.0895 5.75 11.3026 5.75 13.0001C5.75 14.6975 5.7575 14.9099 5.78775 15.5765C5.81838 16.2419 5.92369 16.6961 6.07812 17.0934C6.23787 17.5046 6.45144 17.8533 6.79894 18.2006C7.14625 18.5483 7.49494 18.7624 7.90575 18.922C8.30344 19.0766 8.75769 19.1819 9.42294 19.2124C10.0896 19.2427 10.3025 19.2501 11.9998 19.2501C13.6974 19.2501 13.9097 19.2427 14.5764 19.2124C15.2417 19.1819 15.6964 19.0766 16.0941 18.922C16.5051 18.7624 16.8532 18.5483 17.2005 18.2006C17.5482 17.8533 17.7617 17.5046 17.9219 17.0936C18.0755 16.6961 18.181 16.2417 18.2122 15.5766C18.2422 14.91 18.25 14.6975 18.25 13.0001C18.25 11.3026 18.2422 11.0896 18.2122 10.4229C18.181 9.75756 18.0755 9.30344 17.9219 8.90606C17.7617 8.49494 17.5482 8.14625 17.2005 7.79881C16.8529 7.45119 16.5052 7.23762 16.0938 7.07819C15.6953 6.92356 15.2409 6.81819 14.5755 6.78775C13.9088 6.75744 13.6966 6.75 11.9986 6.75H12.0006ZM11.4399 7.87631C11.6063 7.87606 11.792 7.87631 12.0006 7.87631C13.6694 7.87631 13.8671 7.88231 14.5261 7.91225C15.1355 7.94012 15.4663 8.04194 15.6866 8.1275C15.9783 8.24075 16.1862 8.37619 16.4048 8.595C16.6236 8.81375 16.7589 9.02206 16.8725 9.31375C16.9581 9.53375 17.06 9.8645 17.0878 10.4739C17.1177 11.1328 17.1242 11.3306 17.1242 12.9986C17.1242 14.6666 17.1177 14.8646 17.0878 15.5234C17.0599 16.1327 16.9581 16.4635 16.8725 16.6836C16.7593 16.9753 16.6236 17.1829 16.4048 17.4016C16.1861 17.6203 15.9784 17.7557 15.6866 17.869C15.4665 17.9549 15.1355 18.0565 14.5261 18.0844C13.8673 18.1143 13.6694 18.1208 12.0006 18.1208C10.3317 18.1208 10.1339 18.1143 9.47506 18.0844C8.86569 18.0563 8.53494 17.9544 8.31444 17.8689C8.02281 17.7556 7.81444 17.6202 7.59569 17.4014C7.37694 17.1827 7.24156 16.9749 7.128 16.6831C7.04244 16.463 6.9405 16.1322 6.91275 15.5229C6.88281 14.864 6.87681 14.6661 6.87681 12.9971C6.87681 11.3281 6.88281 11.1312 6.91275 10.4723C6.94062 9.86294 7.04244 9.53219 7.128 9.31187C7.24131 9.02019 7.37694 8.81188 7.59575 8.59313C7.8145 8.37438 8.02281 8.23894 8.3145 8.12544C8.53481 8.0395 8.86569 7.93794 9.47506 7.90994C10.0516 7.88387 10.2751 7.87606 11.4399 7.87475V7.87631ZM15.3368 8.91406C14.9228 8.91406 14.5868 9.24969 14.5868 9.66381C14.5868 10.0779 14.9228 10.4138 15.3368 10.4138C15.7509 10.4138 16.0868 10.0779 16.0868 9.66381C16.0868 9.24975 15.7509 8.91381 15.3368 8.91381V8.91406ZM12.0006 9.79038C10.2281 9.79038 8.79094 11.2275 8.79094 13.0001C8.79094 14.7726 10.2281 16.2091 12.0006 16.2091C13.7731 16.2091 15.2098 14.7726 15.2098 13.0001C15.2098 11.2276 13.773 9.79038 12.0004 9.79038H12.0006ZM12.0006 10.9167C13.1511 10.9167 14.0839 11.8494 14.0839 13.0001C14.0839 14.1506 13.1511 15.0834 12.0006 15.0834C10.8499 15.0834 9.91725 14.1506 9.91725 13.0001C9.91725 11.8494 10.8499 10.9167 12.0006 10.9167Z" fill="white"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear_1099_17940" x1="4" y1="21" x2="20" y2="8" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFC351"/>
        <stop offset="0.229167" stop-color="#F64F4F"/>
        <stop offset="0.619792" stop-color="#CF3B9D"/>
        <stop offset="0.989583" stop-color="#515BCB"/>
        </linearGradient>
        <radialGradient id="paint1_radial_1099_17940" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.25 22.2323) rotate(-90) scale(15.8572 14.7484)">
        <stop stop-color="#FFDD55"/>
        <stop offset="0.1" stop-color="#FFDD55"/>
        <stop offset="0.5" stop-color="#FF543E"/>
        <stop offset="1" stop-color="#C837AB"/>
        </radialGradient>
        <radialGradient id="paint2_radial_1099_17940" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.31994 6.15256) rotate(78.681) scale(7.08825 29.218)">
        <stop stop-color="#3771C8"/>
        <stop offset="0.128" stop-color="#3771C8"/>
        <stop offset="1" stop-color="#6600FF" stop-opacity="0"/>
        </radialGradient>
        <clipPath id="clip0_1099_17940">
        <rect width="16" height="16" fill="white" transform="translate(4 5)"/>
        </clipPath>
        </defs>
        </svg>
        
        // <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        //   <rect y="0.890625" width="24" height="24" rx="4" fill="#F4F6FF" />
        //   <path d="M15.3577 5H8.65032C5.73687 5 4 6.736 4 9.648V16.344C4 19.264 5.73687 21 8.65032 21H15.3497C18.2631 21 20 19.264 20 16.352V9.648C20.008 6.736 18.2711 5 15.3577 5ZM12.004 16.104C10.2911 16.104 8.89844 14.712 8.89844 13C8.89844 11.288 10.2911 9.896 12.004 9.896C13.7168 9.896 15.1095 11.288 15.1095 13C15.1095 14.712 13.7168 16.104 12.004 16.104ZM16.7423 8.904C16.7023 9 16.6463 9.088 16.5743 9.168C16.4942 9.24 16.4062 9.296 16.3101 9.336C16.2141 9.376 16.11 9.4 16.006 9.4C15.7899 9.4 15.5898 9.32 15.4377 9.168C15.3657 9.088 15.3096 9 15.2696 8.904C15.2296 8.808 15.2056 8.704 15.2056 8.6C15.2056 8.496 15.2296 8.392 15.2696 8.296C15.3096 8.192 15.3657 8.112 15.4377 8.032C15.6218 7.848 15.9019 7.76 16.1581 7.816C16.2141 7.824 16.2621 7.84 16.3101 7.864C16.3582 7.88 16.4062 7.904 16.4542 7.936C16.4942 7.96 16.5342 8 16.5743 8.032C16.6463 8.112 16.7023 8.192 16.7423 8.296C16.7824 8.392 16.8064 8.496 16.8064 8.6C16.8064 8.704 16.7824 8.808 16.7423 8.904Z" fill="url(#paint0_linear_1099_17940)" />
        //   <g clip-path="url(#clip0_1099_17940)">
        //     <path d="M16.25 5H7.75C5.67893 5 4 6.67893 4 8.75V17.25C4 19.3211 5.67893 21 7.75 21H16.25C18.3211 21 20 19.3211 20 17.25V8.75C20 6.67893 18.3211 5 16.25 5Z" fill="url(#paint1_radial_1099_17940)" />
        //     <path d="M16.25 5H7.75C5.67893 5 4 6.67893 4 8.75V17.25C4 19.3211 5.67893 21 7.75 21H16.25C18.3211 21 20 19.3211 20 17.25V8.75C20 6.67893 18.3211 5 16.25 5Z" fill="url(#paint2_radial_1099_17940)" />
        //     <path d="M12.0006 6.75C10.3032 6.75 10.0901 6.75744 9.4235 6.78775C8.75813 6.81825 8.30394 6.92356 7.90656 7.07812C7.49544 7.23775 7.14675 7.45131 6.79938 7.79881C6.45169 8.14625 6.23813 8.49494 6.078 8.90587C5.923 9.30338 5.81756 9.75775 5.78762 10.4228C5.75781 11.0895 5.75 11.3026 5.75 13.0001C5.75 14.6975 5.7575 14.9099 5.78775 15.5765C5.81838 16.2419 5.92369 16.6961 6.07812 17.0934C6.23787 17.5046 6.45144 17.8533 6.79894 18.2006C7.14625 18.5483 7.49494 18.7624 7.90575 18.922C8.30344 19.0766 8.75769 19.1819 9.42294 19.2124C10.0896 19.2427 10.3025 19.2501 11.9998 19.2501C13.6974 19.2501 13.9097 19.2427 14.5764 19.2124C15.2417 19.1819 15.6964 19.0766 16.0941 18.922C16.5051 18.7624 16.8532 18.5483 17.2005 18.2006C17.5482 17.8533 17.7617 17.5046 17.9219 17.0936C18.0755 16.6961 18.181 16.2417 18.2122 15.5766C18.2422 14.91 18.25 14.6975 18.25 13.0001C18.25 11.3026 18.2422 11.0896 18.2122 10.4229C18.181 9.75756 18.0755 9.30344 17.9219 8.90606C17.7617 8.49494 17.5482 8.14625 17.2005 7.79881C16.8529 7.45119 16.5052 7.23762 16.0938 7.07819C15.6953 6.92356 15.2409 6.81819 14.5755 6.78775C13.9088 6.75744 13.6966 6.75 11.9986 6.75H12.0006ZM11.4399 7.87631C11.6063 7.87606 11.792 7.87631 12.0006 7.87631C13.6694 7.87631 13.8671 7.88231 14.5261 7.91225C15.1355 7.94012 15.4663 8.04194 15.6866 8.1275C15.9783 8.24075 16.1862 8.37619 16.4048 8.595C16.6236 8.81375 16.7589 9.02206 16.8725 9.31375C16.9581 9.53375 17.06 9.8645 17.0878 10.4739C17.1177 11.1328 17.1242 11.3306 17.1242 12.9986C17.1242 14.6666 17.1177 14.8646 17.0878 15.5234C17.0599 16.1327 16.9581 16.4635 16.8725 16.6836C16.7593 16.9753 16.6236 17.1829 16.4048 17.4016C16.1861 17.6203 15.9784 17.7557 15.6866 17.869C15.4665 17.9549 15.1355 18.0565 14.5261 18.0844C13.8673 18.1143 13.6694 18.1208 12.0006 18.1208C10.3317 18.1208 10.1339 18.1143 9.47506 18.0844C8.86569 18.0563 8.53494 17.9544 8.31444 17.8689C8.02281 17.7556 7.81444 17.6202 7.59569 17.4014C7.37694 17.1827 7.24156 16.9749 7.128 16.6831C7.04244 16.463 6.9405 16.1322 6.91275 15.5229C6.88281 14.864 6.87681 14.6661 6.87681 12.9971C6.87681 11.3281 6.88281 11.1312 6.91275 10.4723C6.94062 9.86294 7.04244 9.53219 7.128 9.31187C7.24131 9.02019 7.37694 8.81188 7.59575 8.59313C7.8145 8.37438 8.02281 8.23894 8.3145 8.12544C8.53481 8.0395 8.86569 7.93794 9.47506 7.90994C10.0516 7.88387 10.2751 7.87606 11.4399 7.87475V7.87631ZM15.3368 8.91406C14.9228 8.91406 14.5868 9.24969 14.5868 9.66381C14.5868 10.0779 14.9228 10.4138 15.3368 10.4138C15.7509 10.4138 16.0868 10.0779 16.0868 9.66381C16.0868 9.24975 15.7509 8.91381 15.3368 8.91381V8.91406ZM12.0006 9.79038C10.2281 9.79038 8.79094 11.2275 8.79094 13.0001C8.79094 14.7726 10.2281 16.2091 12.0006 16.2091C13.7731 16.2091 15.2098 14.7726 15.2098 13.0001C15.2098 11.2276 13.773 9.79038 12.0004 9.79038H12.0006ZM12.0006 10.9167C13.1511 10.9167 14.0839 11.8494 14.0839 13.0001C14.0839 14.1506 13.1511 15.0834 12.0006 15.0834C10.8499 15.0834 9.91725 14.1506 9.91725 13.0001C9.91725 11.8494 10.8499 10.9167 12.0006 10.9167Z" fill="white" />
        //   </g>
        //   <defs>
        //     <linearGradient id="paint0_linear_1099_17940" x1="4" y1="21" x2="20" y2="8" gradientUnits="userSpaceOnUse">
        //       <stop stop-color="#FFC351" />
        //       <stop offset="0.229167" stop-color="#F64F4F" />
        //       <stop offset="0.619792" stop-color="#CF3B9D" />
        //       <stop offset="0.989583" stop-color="#515BCB" />
        //     </linearGradient>
        //     <radialGradient id="paint1_radial_1099_17940" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.25 22.2323) rotate(-90) scale(15.8572 14.7484)">
        //       <stop stop-color="#FFDD55" />
        //       <stop offset="0.1" stop-color="#FFDD55" />
        //       <stop offset="0.5" stop-color="#FF543E" />
        //       <stop offset="1" stop-color="#C837AB" />
        //     </radialGradient>
        //     <radialGradient id="paint2_radial_1099_17940" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.31994 6.15256) rotate(78.681) scale(7.08825 29.218)">
        //       <stop stop-color="#3771C8" />
        //       <stop offset="0.128" stop-color="#3771C8" />
        //       <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
        //     </radialGradient>
        //     <clipPath id="clip0_1099_17940">
        //       <rect width="16" height="16" fill="white" transform="translate(4 5)" />
        //     </clipPath>
        //   </defs>
        // </svg>


      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        // <svg fill="green" viewBox="0 0 24 24" {...props}>
        //   <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        // </svg>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.890625" width="24" height="24" rx="4" fill="#F4F6FF" />
          <path d="M6.66667 5C5.1939 5 4 6.1939 4 7.66667V18.3333C4 19.8061 5.1939 21 6.66667 21H17.3333C18.8061 21 20 19.8061 20 18.3333V7.66667C20 6.1939 18.8061 5 17.3333 5H6.66667ZM7.46131 8.42857H10.4851L12.6324 11.4799L15.2381 8.42857H16.1905L13.0625 12.0908L16.9196 17.5714H13.8966L11.4048 14.0312L8.38095 17.5714H7.42857L10.9747 13.4204L7.46131 8.42857ZM8.91964 9.19048L14.2939 16.8095H15.4613L10.0871 9.19048H8.91964Z" fill="black" />
        </svg>

      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        // <svg fill="green" viewBox="0 0 24 24" {...props}>
        //   <path
        //     fillRule="evenodd"
        //     d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        //     clipRule="evenodd"
        //   />
        // </svg>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.890625" width="24" height="24" rx="4" fill="#F4F6FF" />
          <path d="M12 5C7.582 5 4 8.63809 4 13.1253C4 16.9326 6.58133 20.1184 10.0613 21C10.024 20.8903 10 20.763 10 20.6052V19.2165C9.67533 19.2165 9.13133 19.2165 8.99467 19.2165C8.44733 19.2165 7.96067 18.9775 7.72467 18.5333C7.46267 18.0397 7.41733 17.2847 6.768 16.8229C6.57533 16.6692 6.722 16.4939 6.944 16.5176C7.354 16.6354 7.694 16.9211 8.014 17.345C8.33267 17.7695 8.48267 17.8657 9.078 17.8657C9.36667 17.8657 9.79867 17.8488 10.2053 17.7837C10.424 17.2197 10.802 16.7004 11.264 16.4553C8.6 16.177 7.32867 14.8309 7.32867 13.0034C7.32867 12.2166 7.65867 11.4555 8.21933 10.8143C8.03533 10.1778 7.804 8.87981 8.29 8.38553C9.48867 8.38553 10.2133 9.17503 10.3873 9.38832C10.9847 9.18045 11.6407 9.06263 12.33 9.06263C13.0207 9.06263 13.6793 9.18045 14.278 9.38967C14.45 9.17774 15.1753 8.38553 16.3767 8.38553C16.8647 8.88049 16.6307 10.1839 16.4447 10.819C17.002 11.4589 17.33 12.2179 17.33 13.0034C17.33 14.8295 16.0607 16.1749 13.4007 16.4546C14.1327 16.8426 14.6667 17.9327 14.6667 18.754V20.6052C14.6667 20.6757 14.6513 20.7265 14.6433 20.7867C17.7607 19.6769 20 16.6706 20 13.1253C20 8.63809 16.418 5 12 5Z" fill="#303030" />
        </svg>

      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        // <svg fill="green" viewBox="0 0 24 24" {...props}>
        //   <path
        //     fillRule="evenodd"
        //     d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
        //     clipRule="evenodd"
        //   />
        // </svg>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.890625" width="24" height="24" rx="4" fill="#F4F6FF" />
          <path d="M16 6H8C5.6 6 4 7.625 4 10.0625V14.9375C4 17.375 5.6 19 8 19H16C18.4 19 20 17.375 20 14.9375V10.0625C20 7.625 18.4 6 16 6ZM13.512 13.3369L11.536 14.5394C10.736 15.0269 10.08 14.6531 10.08 13.7025V11.2894C10.08 10.3388 10.736 9.96501 11.536 10.4525L13.512 11.655C14.272 12.1262 14.272 12.8737 13.512 13.3369Z" fill="#FF0000" />
        </svg>

      ),
    },
  ],
}

export default function FooterDemo() {
  return (
    <div className=" pt-10 text-white" style={{
      background: "linear-gradient(0deg, #FFFFFF, #FFFFFF),linear- gradient(0deg, #E5E7EB, #E5E7EB)",
      borderTop: "1px solid #E5E7EB",boxShadow: "0px 0px 8px 0px #0000001A"
}}>
  <footer>
    <div className="hidden grid-cols-2 gap-6 md:grid-cols-5 lg:grid xl:grid-cols-8">
      <div className="flex hidden flex-col items-start justify-start gap-2 lg:flex "></div>
      <div className="col-span-2 ml-6 flex flex-col items-start justify-start gap-2">
        <ul>
          <li className="flex lg:flex-1">
            <a href="https://clinchit.io/" className="-m-1.5 p-1.5">
              <span className="sr-only">ClinchIt</span>
              <img
                className="h-12 w-auto"
                src="/clinchitLogo.svg"
                alt="clinchit logo"
              />
            </a>
          </li>
          {/* <li className="mt-8 flex">
                  <a
                    style={{fontSize:"16px", fontFamily:"Segoe UI"}}
                    href="/request-demo"
                    className="text-grey-700 px-8 rounded-md bg-green-700 px-2 py-4 text-sm font-semibold shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    SEE IN ACTION
                  </a>
                </li> */}

          <li>
            <div className="mt-8">
              <p style={{  fontSize: "16px", color: "#A9A9A9" }} className="text-xl text-green-700">Address: 500 E 77th St. New York, NY 12345
                Email: help@clinchit.io</p>
              {/* <br />
                    <p style={{fontFamily:"Segoe UI",fontSize:"18px"}} className="text-xl text-green-700">500 E 77th St</p>
                    <p style={{fontFamily:"Segoe UI",fontSize:"18px"}} className="text-xl text-green-700">New York, NY 12345</p>
                    <p style={{fontFamily:"Segoe UI",fontSize:"18px"}} className="text-xl text-green-700">
                      Email: help@clinchit.io
                    </p>
                    <p style={{fontFamily:"Segoe UI",fontSize:"18px"}} className="text-xl text-green-700">New York Office</p> */}
            </div>
          </li>
          {/* <li>
            <div className="mt-8 pt-8 md:flex md:items-center md:justify-between">
              <div className="space-around flex md:order-2">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-500 hover:text-gray-400 mr-3"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </li> */}
        </ul>
      </div>
      {/* <div className="mb-4 ml-6 flex flex-col items-start justify-start gap-2">
        <p style={{ fontSize: "20px", color: "#303030",fontWeight:500 }} className="text-2xl">Solutions</p>
        <ul className="">
          <li className="mt-4"></li>
          <li>
            <a style={{ fontSize: "16px",color:"#A9A9A9" }} href="#" className="hover:underline text-xl">
              Expand
            </a>
          </li>
          <li>
            <a style={{ fontSize: "16px",color:"#A9A9A9" }} href="#" className="hover:underline text-xl">
              Retain
            </a>
          </li>
          <li>
            <a style={{ fontSize: "16px",color:"#A9A9A9" }} href="#" className="hover:underline text-xl">
              Demand
            </a>
          </li>
          <li>
            <a style={{ fontSize: "16px",color:"#A9A9A9" }} href="#" className="hover:underline text-xl">
              Growth
            </a>
          </li> */}
          {/* <li>
                          <a href="#" className="hover:underline">Overview</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Privacy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Pricing</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">FAQ</a>
                      </li> */}
        {/* </ul>
      </div> */}
      {/* <div className="ml-6 flex flex-col items-start justify-start gap-2">
        <p style={{ fontSize: "20px",color: "#303030" }} className="text-2xl">Customers</p>
        <ul>
          <li className="mt-4"></li>
          <li>
            <a style={{ fontSize: "16px",color:"#A9A9A9" }} href="#" className="hover:underline text-xl">
              Cases
            </a>
          </li>
          <li>
            <a style={{ fontSize: "16px",color:"#A9A9A9" }} href="#" className="hover:underline text-xl">
              Testimonials
            </a>
          </li>
          <li>
            <a style={{ fontSize: "16px",color:"#A9A9A9" }} href="#" className="hover:underline text-xl">
              Partners
            </a>
          </li>
        </ul> */}
        {/* <ul className="">
                      <li className="mt-4"></li>
                      <li className="">
                          <a href="#" className="hover:underline">Clinch Expand</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Clinch Retain</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Clinch Demand</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Clinch Growth</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Overview</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Privacy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Pricing</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">FAQ</a>
                      </li>
                  </ul> */}
      {/* </div> */}
      {/* <div className="ml-6 flex flex-col items-start justify-start gap-2">
        <p style={{ fontSize: "20px",color: "#303030" }} className="text-2xl">Resources</p>
        <ul>
          <li className="mt-4"></li>
          <li>
            <a style={{ fontSize: "16px",color:"#A9A9A9" }} href="#" className="hover:underline text-xl">
              Products
            </a>
          </li>
          <li>
            <a style={{ fontSize: "16px",color:"#A9A9A9" }} href="#" className="hover:underline text-xl">
              Tools
            </a>
          </li>
          <li>
            <a style={{ fontSize: "16px",color:"#A9A9A9" }} href="#" className="hover:underline text-xl">
              Al Driven
            </a>
          </li>
        </ul> */}
        {/* <ul className="">
                      <li className="mt-4"></li>
                      <li className="">
                          <a href="#" className="hover:underline">Reveal: The RI Podcast</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Webinars</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Casr Studies</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Revenue Intelligence</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">What's Your Revenue IQ?</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Sales Template</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Blog</a>
                      </li>
                  </ul> */}
      {/* </div> */}
      {/* <div className="ml-6 flex flex-col items-start justify-start gap-2">
        <p style={{ fontSize: "20px",color: "#303030" }} className="text-2xl">Company</p>
        <ul>
          <li className="mt-4"></li>
          <li>
            <a style={{ fontSize: "16px",color:"#A9A9A9" }} href="#" className="hover:underline text-xl">
              Contact Us
            </a>
          </li>
          <li>
            <a style={{ fontSize: "16px",color:"#A9A9A9" }} href="#" className="hover:underline text-xl">
              Our Team
            </a>
          </li>
          <li>
            <a style={{ fontSize: "16px",color:"#A9A9A9" }} href="#" className="hover:underline text-xl">
              Careers
            </a>
          </li>
        </ul> */}
        {/* <ul className="">
                      <li className="mt-4"></li>
                      <li className="">
                          <a href="#" className="hover:underline">About</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Careers</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Outstanding</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Press</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Customers</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Ownership Principles</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Leadership Principles</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Clinch Merch Store</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Customer Advocacy Program</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Golden Clinch Awards</a>
                      </li>
                  </ul> */}
      {/* </div> */}
      <div className="flex hidden flex-col items-start justify-start gap-2 lg:flex "></div>
    </div>
    <div className="hidden grid-cols-2 gap-6 pt-10 md:grid-cols-8 lg:grid xl:grid-cols-8">
      <div className="flex flex-col items-start justify-start gap-2 "></div>
      <div className="col-span-2 ml-6 flex flex-col items-start justify-start gap-2">
        <p style={{ fontSize: "16px", color: "#A9A9A9" }} className="text-base text-green-700">
          Copyright 2023 Clinchit.io Inc. All rights reserved.
        </p>
      </div>
      {/* <div className="flex flex-col col-span-1 items-start justify-start gap-2 "> */}
      {/* </div> */}
      <div className="col-span-3 ml-6 flex flex-row items-start justify-around  gap-2 text-base text-white">
        <div>
          <a style={{ fontSize: "16px",color:"#A9A9A9" }} href="#" className="hover:underline">
            Terms & Conditions &nbsp;{" "}
          </a>
        </div>
        <div>
          <a style={{ fontSize: "16px",color:"#A9A9A9" }} href="#" className="hover:underline">
            Privacy Policy &nbsp;{" "}
          </a>
        </div>
        <div>
          <a style={{ fontSize: "16px",color:"#A9A9A9" }} href="#" className="hover:underline">
            Cookie Settings &nbsp;{" "}
          </a>
        </div>
        <div>
          <a style={{ fontSize: "16px",color:"#A9A9A9" }} href="#" className="hover:underline">
            Service Status &nbsp;{" "}
          </a>
        </div>
      </div>
      {/* <div className="col-span-1 ml-6 flex flex-row items-center justify-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="transparent"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="green"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            &nbsp; <p style={{ fontFamily: "Segoe UI", fontSize: "16px" }} className="text-base text-green-700">English</p>
          </div> */}
    </div>


    <div>
      <div className="w-full px-4 pt-10">
        <div className="mx-auto w-full max-w-md rounded-2xl p-2 lg:hidden ">
          <div className="flex justify-center lg:flex-1">
            <a href="https://clinchit.io/"  className="-m-1.5 p-1.5">
              <span className="sr-only">ClinchIt</span>
              <img
                className="h-12 w-auto"
                src="/clinchitLogo.svg"
                alt="clinchit logo"
              />
            </a>
          </div>
          {/* <div className="my-6 flex justify-center">
                  <a
                    href="/request-demo"
                    className="text-grey-700 px-8 rounded-md bg-green-700 px-2 py-4 text-sm font-semibold shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    SEE IN ACTION
                  </a>
                </div> */}
          <div className="flex flex-col items-center justify-center">
            <p style={{ color: "#A9A9A9", fontSize: "13px" }} className="flex justify-center items-center text-center text-base text-green-700 mt-3 mb-4">Address: 500 E 77th St. New York, NY 12345 Email: help@clinchit.io</p>
            {/* <br />
                  <p className="text-base text-green-700">500 E 77th St</p>
                  <p className="text-base text-green-700">New York, NY 12345</p>
                  <p className="text-base text-green-700">
                    Email: help@clinchit.io
                  </p>
                  <p className="text-base text-green-700">New York Office</p> */}
          </div>
          {/* <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                  <span style={{color: "#303030"}}>Solutions</span>
                  <ChevronUpIcon
                    className={`${open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white">
                  <ul className="flex flex-col gap-2 items-center">
                    <li style={{color:"#A9A9A9" }}>Expand</li>
                    <li style={{color:"#A9A9A9" }}>Retain</li>
                    <li style={{color:"#A9A9A9" }}>Demand</li>
                    <li style={{color:"#A9A9A9" }}>Growth</li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                  <span style={{color: "#303030"}}>Customers</span>
                  <ChevronUpIcon
                    className={`${open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white">
                <ul className="flex flex-col gap-2 items-center">
                    <li style={{color:"#A9A9A9" }}>Cases</li>
                    <li style={{color:"#A9A9A9" }}>Testimonials</li>
                    <li style={{color:"#A9A9A9" }}>Partners</li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                  <span style={{color: "#303030"}}>Resources</span>
                  <ChevronUpIcon
                    className={`${open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white">
                <ul className="flex flex-col gap-2 items-center">
                    <li style={{color:"#A9A9A9" }}>Products</li>
                    <li style={{color:"#A9A9A9" }}>Tools</li>
                    <li style={{color:"#A9A9A9" }}>Al Driven</li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white  focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                  <span style={{color: "#303030"}}>Company</span>
                  <ChevronUpIcon
                    className={`${open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white">
                <ul className="flex flex-col gap-2 items-center">
                    <li style={{color:"#A9A9A9" }}>Contact Us</li>
                    <li style={{color:"#A9A9A9" }}>Our Team</li>
                    <li style={{color:"#A9A9A9" }}>Careers</li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure> */}
          {/* <div className="mt-6 flex flex-row items-center justify-between">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-400 mr-3"
              >
                
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div> */}
          <div className="flex flex-col justify-center items-center text-base text-green-700 mt-3">
          <div className="flex gap-2 mt-2">
          <div>
              <a href="#" style={{color:"#A9A9A9",fontSize:"13px"}} className="hover:underline">
                Terms & Conditions &nbsp;{" "}
              </a>
            </div>
            <div>
              <a href="#"  style={{color:"#A9A9A9",fontSize:"13px"}} className="hover:underline">
                Privacy Policy &nbsp;{" "}
              </a>
            </div>
            <div>
              <a href="#"  style={{color:"#A9A9A9",fontSize:"13px"}} className="hover:underline">
                Cookie Settings &nbsp;{" "}
              </a>
            </div>
            <div>
              <a href="#"  style={{color:"#A9A9A9",fontSize:"13px"}} className="hover:underline">
                Service Status &nbsp;{" "}
              </a>
            </div>
          </div>

            {/* <div className="flex flex-row items-center justify-center gap-2 mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="transparent"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="green"
                    className="h-8 w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  &nbsp; <p className="text-base text-green-700">English</p>
                </div> */}

            <p style={{ color: "#A9A9A9" }} className="flex justify-center items-center text-center text-base text-green-700 mt-3">
              Copyright 2023 Clinchit.io Inc. All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </div>
  </footer>
    </div >
  );
}
