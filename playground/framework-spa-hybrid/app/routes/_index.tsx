import type { Route } from "./+types/_index";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
};

export function loader(_: Route.LoaderArgs) {
  return { name: "SpongeBob" };
}

// Haven't quite gotten around to making these optional yet
export function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  return serverLoader();
}

clientLoader.hydrate = true;

export default function Index({ loaderData }: Route.ComponentProps) {
  const { name } = loaderData;
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to React Router, {name}</h1>
    </div>
  );
}
