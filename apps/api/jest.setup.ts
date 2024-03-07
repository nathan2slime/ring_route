jest.mock('pg', () => {
  const client = {
    connect: jest.fn(),
    query: jest.fn(),
    end: jest.fn(),
  };

  return { Client: jest.fn(() => client) };
});
