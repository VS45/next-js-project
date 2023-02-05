import React from "react";
import { useRouter } from "next/router";
const FilteredEventPage = () => {
  const router = useRouter();
  const arrayValue = router.query.slug;
  const year = arrayValue[0];
  const month = arrayValue[1];
  // console.log(arrayValue.slug);
  // alert(arrayValue.slug);
  return <div>FilteredEventPage</div>;
};

export default FilteredEventPage;
