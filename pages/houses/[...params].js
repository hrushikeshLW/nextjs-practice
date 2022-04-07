import {useRouter} from "next/router";

const Houses = () => {
  const router = useRouter();
  const {params = []} = router.query;
  console.log(params);
  if (params.length === 1) {
    return <h1>min range is {params[0]}</h1>;
  } else if (params.length === 2) {
    return (
      <h1>
        min range is {params[0]} and max range is {params[1]}
      </h1>
    );
  } else {
    return <h1>list of houses</h1>;
  }
};
export default Houses;
