import PrimaryButton, { PrimaryBtnInterface } from "../buttons/primary";
import { Dispatch, SetStateAction } from "react";

export default function MyNavBar(navBar: NavBarInterface) {
  const primaryBtnProps: PrimaryBtnInterface = { name: "Logo" };

  return (
    <ul className="flex  justify-between">
      <div className="content-center flex">
        <PrimaryButton {...primaryBtnProps} />
      </div>
      <div className="flex">
        <li className="-mb-px mr-1">
          <a
            onClick={() => navBar.changeView(true)}
            className={
              navBar.selectedAddStudentTab
                ? styles.selectedTab
                : styles.nonSelectedTab
            }
            href="#"
          >
            Add Student
          </a>
        </li>
        <li className="mr-1">
          <a
            onClick={() => navBar.changeView(false)}
            className={
              !navBar.selectedAddStudentTab
                ? styles.selectedTab
                : styles.nonSelectedTab
            }
            href="#"
          >
            Student List
          </a>
        </li>
      </div>
    </ul>
  );
}

export interface NavBarInterface {
  selectedAddStudentTab: boolean;
  changeView: any;
}

const styles = {
  selectedTab:
    "bg-gray-100 inline-block rounded-t py-2 px-4 text-gray-400 font-semibold hover:bg-gray-200",
  nonSelectedTab:
    "bg-white inline-block py-2 px-4 text-gray-400 font-semibold hover:bg-gray-50",
};
