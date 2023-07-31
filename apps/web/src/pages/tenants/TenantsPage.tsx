import React, { useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Row } from 'react-table';
import { ITenantEntity } from '@novu/shared';

import PageContainer from '../../components/layout/components/PageContainer';
import PageHeader from '../../components/layout/components/PageHeader';
import { TenantsList } from './components/list/TenantsList';
import { ROUTES } from '../../constants/routes.enum';

export function TenantsPage() {
  const navigate = useNavigate();

  const onAddTenantClickCallback = useCallback(() => {
    navigate(ROUTES.TENANTS_CREATE);
  }, [navigate]);

  const onRowClickCallback = useCallback(
    (item: Row<ITenantEntity>) => {
      navigate(`${ROUTES.TENANTS}/${item.original.identifier}`);
    },
    [navigate]
  );

  return (
    <PageContainer title="Tenants">
      <PageHeader title="Tenants" />
      <TenantsList onAddTenantClick={onAddTenantClickCallback} onRowClickCallback={onRowClickCallback} />
      <Outlet />
    </PageContainer>
  );
}
