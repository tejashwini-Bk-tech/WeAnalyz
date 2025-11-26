import MainDashboard from "@/components/sidebar/main";
import MyTickets from "@/components/sidebar/my_tickets";
import TicketViews from "@/components/sidebar/ticker_view";
import Todo from "@/components/sidebar/to_do";


export default function DashboardLayout() {
  return (
    <>
 
        <div className=" h-full bg-neutral-100 flex flex-row ">
          <TicketViews />
          <div className="flex flex-row  gap-1 bg-white p-4 px-1 py-2 m-0 w-full h-full mt-1 mb-1 rounded-2xl shadow-lg ">
            <div className="">
              <MyTickets />
            </div>

            <div className="">
              <MainDashboard />
            </div>

            <div className="">
              <Todo />
            </div>
          </div>
        </div>
      
    </>
  );
}
