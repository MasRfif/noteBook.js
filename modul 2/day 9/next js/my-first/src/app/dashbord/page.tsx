import ReaderList from "@/components/readerList";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">
          Welcome to the home page of your application.
        </p>
        <p className="text-gray-600">
          This dashboard is designed to provide an overview of key metrics,
          recent activities, and important updates. It serves as a central hub
          for managing your application and ensuring that you stay informed
          about its status.
        </p>
        <ul className="list-disc pl-4 space-y-1 text-gray-600">
          <li>View and analyze user engagement</li>
          <li>Monitor system performance</li>
          <li>Access real-time data</li>
          <li>Stay updated with the latest news and features</li>
        </ul>
        <p className="text-gray-600">
          To get started, explore the various sections of the dashboard and
          customize it to suit your needs.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eaque
          quibusdam repellendus accusantium nihil facere non magnam natus, ut
          reiciendis, vitae expedita impedit perferendis quidem necessitatibus
          ea corporis earum ab! Odit voluptatum maxime dolorum saepe nesciunt
          impedit ducimus porro, dolores in aliquid illum perferendis voluptates
          placeat ex doloremque ab, deleniti explicabo corporis ea quia
          repellendus. Dolor perspiciatis libero illo ipsam? Eaque cupiditate
          molestias modi magni qui blanditiis quaerat nostrum? Maiores
          laudantium quasi magnam optio cum exercitationem eaque quis possimus,
          labore pariatur odit nisi quaerat numquam illo natus quas voluptatum
          vitae. Corporis laudantium eligendi illum labore voluptatibus autem
          obcaecati atque qui quos accusantium unde magnam, praesentium nostrum
          enim! Impedit nostrum temporibus iure, beatae vel cum sequi fugiat.
          Facilis labore nulla sapiente! Quibusdam assumenda sunt aperiam et.
          Magni, assumenda placeat doloremque voluptas distinctio adipisci
          similique deserunt modi consequatur ea ad architecto corporis
          molestias rem consequuntur temporibus in maxime, officiis at sint
          eveniet? Maiores, molestiae rem quia vero atque reprehenderit impedit
          earum soluta ad ratione laudantium ipsum similique saepe suscipit
          tenetur, iure itaque commodi quidem quisquam. Pariatur aliquam, sit
          harum ex non ab.
        </p>
      </div>

      <div>
        <p className="text-center text-2xl font-bold text-gray-800 mb-4">
          This our client
        </p>
        <Suspense
          fallback={<h1 className="text-center text-gray-600">Loading....</h1>}
        >
          <ReaderList />
        </Suspense>
      </div>
    </div>
  );
}
