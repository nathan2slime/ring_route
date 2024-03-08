import { LocationRepository } from '@/repositories/location.repository';

import { Location, NewLocation } from '@/schemas/types/location.type';

import { db } from '@/database';

describe('LocationRepository', () => {
  describe('create', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    const newLocation: NewLocation = {
      longitude: expect.any(Number),
      latitude: expect.any(Number),
    };

    const location: Location = {
      ...newLocation,
      id: expect.any(Number),
      created_at: expect.any(Date),
      updated_at: expect.any(Date),
      deleted_at: null,
    };

    it('should create and return location', async () => {
      jest.spyOn(db, 'query').mockImplementation(() => ({
        rows: [location],
      }));

      const locationRepository = new LocationRepository();
      const res = await locationRepository.create(newLocation);

      expect(res).toEqual(location);
      expect(db.query).toHaveBeenCalled();
      expect(db.query).toHaveBeenCalledTimes(1);
    });

    it('should return an error when something occurs', async () => {
      const error = 'Connection timeout';

      jest.spyOn(db, 'query').mockImplementation(() => {
        throw new Error(error);
      });

      const locationRepository = new LocationRepository();

      try {
        await locationRepository.create(newLocation);

        expect(false).toBe(true);
      } catch (e) {
        expect((e as Error).message).toBe(error);
      }
    });
  });
});
