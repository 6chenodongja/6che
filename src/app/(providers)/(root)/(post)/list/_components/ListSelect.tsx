import { createClient } from '@/supabase/client';

const User = 'a184313d-fac7-4c5d-8ee3-89e367cfb86f';
const supabase = createClient();

interface ListSelectsProps {
  handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function ListSelects({ handleSortChange }: ListSelectsProps) {
  return (
    <div>
      <div className="w-full h-[50px] relative">
        <div className="flex justify-center items-start w-[75px] absolute left-3.5 top-2">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden  px-1 py-1.5 rounded-lg">
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#121212]">
              <select onChange={handleSortChange}>
                <option value="latest">최신순</option>
                <option value="likes">좋아요순</option>
              </select>
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center absolute left-[270px] top-[9px]">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-8 h-8">
            <div
              className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 p-1 rounded-[1000px]"
              style={{ filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.08))' }}
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.5833 4.66667C16.5833 4.16041 16.1729 3.75 15.6667 3.75C15.1604 3.75 14.75 4.16041 14.75 4.66667V11.0833C14.75 11.5896 15.1604 12 15.6667 12C16.1729 12 16.5833 11.5896 16.5833 11.0833V4.66667ZM9.25 19.3333C9.25 19.8396 8.83959 20.25 8.33333 20.25C7.82707 20.25 7.41667 19.8396 7.41667 19.3333V12.9167C7.41667 12.4104 7.82707 12 8.33333 12C8.83959 12 9.25 12.4104 9.25 12.9167V19.3333ZM15.6667 13.6042C15.0338 13.6042 14.5208 14.1172 14.5208 14.75C14.5208 15.3828 15.0338 15.8958 15.6667 15.8958C16.2995 15.8958 16.8125 15.3828 16.8125 14.75C16.8125 14.1172 16.2995 13.6042 15.6667 13.6042ZM13.1458 14.75C13.1458 13.3578 14.2744 12.2292 15.6667 12.2292C17.0589 12.2292 18.1875 13.3578 18.1875 14.75C18.1875 16.1422 17.0589 17.2708 15.6667 17.2708C14.2744 17.2708 13.1458 16.1422 13.1458 14.75ZM7.1875 9.25C7.1875 9.88283 7.70051 10.3958 8.33333 10.3958C8.96616 10.3958 9.47917 9.88283 9.47917 9.25C9.47917 8.61717 8.96616 8.10417 8.33333 8.10417C7.70051 8.10417 7.1875 8.61717 7.1875 9.25ZM8.33333 11.7708C6.94112 11.7708 5.8125 10.6422 5.8125 9.25C5.8125 7.85778 6.94112 6.72917 8.33333 6.72917C9.72555 6.72917 10.8542 7.85778 10.8542 9.25C10.8542 10.6422 9.72555 11.7708 8.33333 11.7708ZM15.6667 17.5C16.1729 17.5 16.5833 17.9104 16.5833 18.4167V19.3333C16.5833 19.8396 16.1729 20.25 15.6667 20.25C15.1604 20.25 14.75 19.8396 14.75 19.3333V18.4167C14.75 17.9104 15.1604 17.5 15.6667 17.5ZM9.25 5.58333C9.25 6.08959 8.83959 6.5 8.33333 6.5C7.82707 6.5 7.41667 6.08959 7.41667 5.58333V4.66667C7.41667 4.16041 7.82707 3.75 8.33333 3.75C8.83959 3.75 9.25 4.16041 9.25 4.66667V5.58333Z"
                  fill="#121212"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-8 h-8">
            <div
              className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 p-1 rounded-[1000px]"
              style={{ filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.08))' }}
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.58333 10.1667C5.58333 7.63536 7.63536 5.58333 10.1667 5.58333C12.698 5.58333 14.75 7.63536 14.75 10.1667C14.75 12.698 12.698 14.75 10.1667 14.75C7.63536 14.75 5.58333 12.698 5.58333 10.1667ZM10.1667 3.75C6.62284 3.75 3.75 6.62284 3.75 10.1667C3.75 13.7105 6.62284 16.5833 10.1667 16.5833C13.7105 16.5833 16.5833 13.7105 16.5833 10.1667C16.5833 6.62284 13.7105 3.75 10.1667 3.75ZM16.3148 15.0185C15.9569 14.6605 15.3765 14.6605 15.0185 15.0185C14.6605 15.3765 14.6605 15.9569 15.0185 16.3148L18.6852 19.9815C19.0431 20.3395 19.6235 20.3395 19.9815 19.9815C20.3395 19.6235 20.3395 19.0431 19.9815 18.6852L16.3148 15.0185Z"
                  fill="#121212"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListSelects;
