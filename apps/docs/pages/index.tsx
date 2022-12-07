import { PsychedelicBox } from "@lucyds/ui";
import { Global, css } from "@emotion/react";

export default function Docs() {
  return (
    <div>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html {
            background-color: #cce7e1;
          }

          html,
          body,
          #__next,
          #__next > div {
            width: 100%;
            height: 100%;
          }

          .container {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            height: 100%;
          }

          .snek {
            width: 100%;
            max-width: 30rem;
          }
        `}
      />
      <div className="container">
        <PsychedelicBox id="teste" className="snek">
          <svg
            viewBox="0 0 699 881"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M162 513.5C154.8 389.9 123.667 260.667 109 211.5C101.027 182.3 83.678 168.333 75.9999 165C-27.0001 105 29.4999 60.4999 51.9999 53.4999C105.127 44.548 139.925 47.568 164.5 64.5C203.065 91.0714 220 137 236 176.5C254.723 222.724 286.667 408.667 296 498L162 513.5Z"
              fill="#EE7B93"
              stroke="#381753"
              strokeWidth="12"
            />
            <path
              d="M382.5 697.5C329.7 708.7 312.833 593.167 311 534L367 464L305 486.5L324.5 424L260.5 476.5L253.5 408.5L189.5 476.5L166.5 424L150.5 481.5L113.5 464L141.5 513C139.833 521.833 137.5 548.8 141.5 586C138.5 656.5 210 887 382.5 871.5C590.1 853.1 613.667 686.833 599.5 606L525 560C499.5 601.167 435.3 686.3 382.5 697.5Z"
              fill="#A989F8"
              stroke="#381753"
              strokeWidth="16"
            />
            <path
              d="M395.5 328.5C387.9 357.7 402.667 428.667 411 460.5C416.865 485.7 423.444 550.333 426 579.5L380 649.5L434 629.5V720.5L483.5 638L505 735L555.5 667L603.5 747.5V661L649.5 699.5L638 618C663 580.5 631.5 446 619 407C606.5 368 632.5 373.5 658.5 372.5C684.5 371.5 694.5 387.5 692 407C689.5 426.5 641 535.5 649.5 618C658 700.5 708 712 758 720.5C808 729 862.5 688 862.5 661C862.5 639.4 876.5 576 883.5 547C902.5 504.5 932.2 396.3 899 303.5C857.5 187.5 734 162.5 708 158.5C682 154.5 584.5 137.5 505 180.5C425.5 223.5 405 292 395.5 328.5Z"
              fill="#F3ADF4"
              stroke="#381753"
              strokeWidth="24"
            />
            <circle
              cx="57"
              cy="62"
              r="53"
              fill="#F5C264"
              stroke="#381753"
              strokeWidth="8"
            />
            <circle
              cx="189"
              cy="576"
              r="69"
              fill="#F5C264"
              stroke="#381753"
              strokeWidth="8"
            />
            <circle
              cx="490.5"
              cy="550.5"
              r="86.5"
              fill="#F5C264"
              stroke="#381753"
              strokeWidth="12"
            />
            <path
              d="M166 609.703C150.815 614.864 136.896 551 166 551"
              stroke="#381753"
              strokeWidth="24"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M461 592.628C442.243 599.101 425.048 519 461 519"
              stroke="#381753"
              strokeWidth="24"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="114"
              cy="57"
              r="53"
              fill="#F5C264"
              stroke="#381753"
              strokeWidth="8"
            />
            <circle
              cx="262"
              cy="570"
              r="69"
              fill="#F5C264"
              stroke="#381753"
              strokeWidth="8"
            />
            <circle
              cx="583.5"
              cy="542.5"
              r="86.5"
              fill="#F5C264"
              stroke="#381753"
              strokeWidth="12"
            />
            <path
              d="M101.435 79.5C89.4347 83.5 78.4347 34 101.435 34"
              stroke="#381753"
              strokeWidth="24"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M40.4346 84.5C28.4347 88.5 17.4347 39 40.4346 39"
              stroke="#381753"
              strokeWidth="24"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M246 598.703C230.815 603.864 216.896 540 246 540"
              stroke="#381753"
              strokeWidth="24"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M563 579.623C543.349 586.183 525.336 505 563 505"
              stroke="#381753"
              strokeWidth="24"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M214 718C218.333 745.833 237 792 302 821.5"
              stroke="#381753"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>
        </PsychedelicBox>
      </div>
    </div>
  );
}
