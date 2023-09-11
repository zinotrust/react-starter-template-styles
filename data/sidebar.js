import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { MdAddLink, MdDriveFileRenameOutline } from "react-icons/md";
import { AiFillDollarCircle, AiOutlineEye } from "react-icons/ai";
import { BiEditAlt, BiUserCircle } from "react-icons/bi";
import { RiPagesLine, RiAdvertisementLine } from "react-icons/ri";
import { GrDomain } from "react-icons/gr";

const menu = [
  {
    title: "Dashboard",
    icon: <FaTh />,
    path: "/admin/home",
  },

  {
    title: "Account",
    icon: <BiUserCircle />,
    childrens: [
      {
        title: "Profile",
        path: "/admin/profile",
      },
      {
        title: "My Subscription",
        path: "/admin/account",
      },
    ],
  },
];

export default menu;
