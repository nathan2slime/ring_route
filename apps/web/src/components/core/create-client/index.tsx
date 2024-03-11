'use client';

import {
  Button,
  Modal,
  ModalBody,
  Input,
  ModalContent,
  ModalFooter,
  InputProps,
} from '@nextui-org/react';
import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useMemo } from 'react';

import { ClientService } from '@/services/client.service';

import { DialogProps } from './model';

import { schemas } from '@/schemas';
import { getErrorMessage } from '@/schemas/utils';
import dynamic from 'next/dynamic';

export const CreateClient = ({ open, onToggle }: DialogProps) => {
  const {
    watch,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schemas.client),
  });

  const form = watch();

  useEffect(() => {
    if (open) {
    } else {
      reset();
    }
  }, [open]);

  const onCreate = async () => {
    const clientService = new ClientService();

    await clientService.create(form);
  };

  const Map = useMemo(
    () =>
      dynamic(async () => import('@/components/core/map').then(e => e.Map), {
        ssr: false,
      }),
    [],
  );

  return (
    <Modal isOpen={open} onOpenChange={e => onToggle(e)}>
      <ModalContent className="w-full">
        {onClose => (
          <>
            <ModalBody>
              <h1 className="font-bold text-lg mt-4">New client</h1>

              <div className="gap-3 my-4 flex flex-col">
                <div className="flex flex-col gap-3">
                  <Input
                    value={form.name}
                    label="Name"
                    variant="bordered"
                    fullWidth
                    isInvalid={getErrorMessage(errors, 'name').error}
                    color={
                      getErrorMessage(errors, 'name').error
                        ? 'danger'
                        : 'success'
                    }
                    errorMessage={getErrorMessage(errors, 'name').message}
                    onValueChange={e =>
                      setValue('name', e, { shouldValidate: true })
                    }
                  />

                  <Input
                    value={form.email}
                    type="email"
                    label="Email"
                    variant="bordered"
                    fullWidth
                    isInvalid={getErrorMessage(errors, 'email').error}
                    color={
                      getErrorMessage(errors, 'email').error
                        ? 'danger'
                        : 'success'
                    }
                    errorMessage={getErrorMessage(errors, 'email').message}
                    onValueChange={e =>
                      setValue('email', e, { shouldValidate: true })
                    }
                  />

                  <InputMask
                    value={form.phone}
                    type="phone"
                    label="Phone"
                    variant="bordered"
                    fullWidth
                    isInvalid={getErrorMessage(errors, 'phone').error}
                    color={
                      getErrorMessage(errors, 'phone').error
                        ? 'danger'
                        : 'success'
                    }
                    errorMessage={getErrorMessage(errors, 'phone').message}
                    onValueChange={(e: string) =>
                      setValue('phone', e, { shouldValidate: true })
                    }
                    mask="(99) 9 9999-9999"
                  >
                    {/* @ts-ignore */}
                    {(props: unknown) => (
                      <Input {...(props as unknown as InputProps)} />
                    )}
                  </InputMask>
                </div>

                <div className="w-full h-[300px] rounded-lg overflow-hidden">
                  <Map
                    type="mark"
                    onMarker={e => {
                      setValue('latitude', e.lat, { shouldValidate: true });
                      setValue('longitude', e.lng, { shouldValidate: true });
                    }}
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button
                disabled={!isValid}
                color={isValid ? 'primary' : 'default'}
                onPress={onCreate}
              >
                Save
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
