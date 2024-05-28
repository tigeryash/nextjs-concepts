import Card from "@/components/card";
import Link from "next/link";

const ArchivedNotifications = () => {
  return (
    <Card>
      <div>Archived Notifications</div>
      <Link className="underline" href="/complex-dashboard">
        Notifications
      </Link>
    </Card>
  );
};

export default ArchivedNotifications;
