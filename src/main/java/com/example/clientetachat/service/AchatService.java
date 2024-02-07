package com.example.clientetachat.service;

import com.example.clientetachat.model.Achat;
import com.example.clientetachat.repository.AchatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class AchatService {

    @Autowired
    private AchatRepository achatRepository;

    public List<Achat> getAllAchats() { return (List<Achat>) achatRepository.findAll();}

    public Optional<Achat> getAchatById(Long id) {
        return achatRepository.findById(id);
    }
    @Transactional
    public List<Achat> getAchatByDate(Date date) {
        return achatRepository.findByDate(date);
    }

    public Achat createOrUpdateAchat (Achat achat) {
        return achatRepository.save(achat);
    }

    public List<Achat> getAllAchats(Long clientId) {
        return achatRepository.findByClientId(clientId);
    }

    public void deleteAchat(Long id) {
        achatRepository.deleteById(id);
    }

}
