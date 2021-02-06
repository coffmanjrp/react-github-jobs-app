import { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import JobsPagination from './JobsPagination';
import { Container } from 'react-bootstrap';
import Job from './Job';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs();

  return (
    <Container className="my-4">
      <h1 className="mb-4">React GitHub Jobs App</h1>
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
}

export default App;
