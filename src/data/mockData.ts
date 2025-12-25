export interface Profile {
  id: string;
  name: string;
  alias?: string;
  age?: number;
  barangay: string;
  status: "Verified" | "Pending" | "Processing";
  surrenderDate: string;
  imageUrl: string;
}

export const profiles: Profile[] = [
  {
    id: "1",
    name: "Juan Dela Cruz",
    alias: "Ka Pepe",
    age: 28,
    barangay: "San Isidro",
    status: "Verified",
    surrenderDate: "2025-12-20",
    imageUrl:
      "https://ui-avatars.com/api/?name=Juan+Dela+Cruz&background=0D8ABC&color=fff",
  },
  {
    id: "2",
    name: "Maria Santos",
    alias: "Ka Inday",
    age: 32,
    barangay: "Barangay 7",
    status: "Pending",
    surrenderDate: "2025-12-21",
    imageUrl: "https://ui-avatars.com/api/?name=Maria+Santos&background=random",
  },
  {
    id: "3",
    name: "Carlos Reyes",
    alias: "Ka Caloy",
    age: 25,
    barangay: "Barangay 3",
    status: "Processing",
    surrenderDate: "2025-12-22",
    imageUrl: "https://ui-avatars.com/api/?name=Carlos+Reyes&background=random",
  },
];
