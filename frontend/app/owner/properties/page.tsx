import OwnerPropertyCard from "@/components/OwnerPropertyCard";

const page = () => {
  return (
    <div className="min-h-screen">
      <div>
        <h1 className="text-2xl font-bold">My Properties</h1>
        <p>4 listings · Manage all your PGs</p>
      </div>
      <div className="flex flex-wrap gap-5">
        <OwnerPropertyCard />
        <OwnerPropertyCard />
        <OwnerPropertyCard />
      </div>
    </div>
  );
};

export default page;
