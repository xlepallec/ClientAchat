package com.example.clientetachat.service;

import com.example.clientetachat.model.Client;
import com.example.clientetachat.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

    public List<Client> getAllClients(){
        return (List<Client>) clientRepository.findAll();
    }

    public Optional<Client> getClientById(Long id) {
        return clientRepository.findById(id);
    }

    public Client createOrUpdate (Client client, MultipartFile photoFile) throws IOException {
        if (photoFile!=null && !photoFile.isEmpty()) {
            if (photoFile!=null && !photoFile.isEmpty()) {
                client.setPhoto(photoFile.getBytes());
            }
        }
        return clientRepository.save(client);
    }

    public void deleteClient (Long id) {
        clientRepository.deleteById(id);
    }
}
