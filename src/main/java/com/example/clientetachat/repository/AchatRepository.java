package com.example.clientetachat.repository;

import com.example.clientetachat.model.Achat;
import com.example.clientetachat.model.Client;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

public interface AchatRepository extends CrudRepository<Achat,Long> {

    List<Achat> findByClientId(Long clientId);

    List<Achat> findByDate(Date date);

    List<Achat> findByDateAndClient (Date date, Client client);
}
