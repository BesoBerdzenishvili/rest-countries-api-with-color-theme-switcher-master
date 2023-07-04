"use client";

import { useState } from "react";
import Countries from "../components/Countries";
import Filter from "../components/Filter";

export default function Home() {
  const [filter, setFilter] = useState("");
  return (
    <main>
      <Filter setFilter={setFilter} />
      <Countries filter={filter} />
    </main>
  );
}
