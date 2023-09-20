import Container from "@/app/layouts/Container";

const Loading = () => (
  <Container className="flex h-screen items-center justify-center">
    <div className="h-24 w-24 animate-spin rounded-full border-y border-white" />
  </Container>
);
export default Loading;
