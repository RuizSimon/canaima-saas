'use client';

import { useState } from 'react';
import {
  CreateServiceRequestInput,
  ServiceRequest,
  serviceRequests,
} from '@/app/lib/mock-service-requests';
import { NewRequestModal } from '@/app/components/service-requests/new-request-modal';
import { RequestsTable } from '@/app/components/service-requests/requests-table';

export function SolicitudesModule() {
  const [requests, setRequests] = useState<ServiceRequest[]>(serviceRequests);

  const handleCreateRequest = (payload: CreateServiceRequestInput) => {
    setRequests((prev) => [
      {
        id: `SRV-${2400 + prev.length + 1}`,
        client: payload.client,
        origin: payload.origin,
        destination: payload.destination,
        date: payload.date,
        time: payload.time,
        serviceType: payload.serviceType,
        notes: payload.notes,
        status: 'Pendiente',
      },
      ...prev,
    ]);
  };

  return (
    <>
      <div className="mb-4 flex justify-end">
        <NewRequestModal onCreate={handleCreateRequest} />
      </div>
      <RequestsTable requests={requests} />
    </>
  );
}
