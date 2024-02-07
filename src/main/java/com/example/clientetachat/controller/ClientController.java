package com.example.clientetachat.controller;

import com.example.clientetachat.model.Client;
import com.example.clientetachat.service.ClientService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/clients")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @GetMapping
    public List<Client> getAllClients() {
        return clientService.getAllClients();
    }

    @GetMapping("/{id}")
    public Client getClientById(@PathVariable Long id) {
        return clientService.getClientById(id).orElse(null);
    }

    @PostMapping
    public Client createClient(@RequestParam("client") String client, @RequestParam(value = "photo", required = false) MultipartFile photoFile) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        Client clientObject = mapper.readValue(client, Client.class);
        return clientService.createOrUpdate(clientObject, photoFile);
    }

    @PutMapping("/{id}")
    public Client updateClient(@PathVariable Long id, @RequestParam("client") String client, @RequestParam(value = "photo", required = false) MultipartFile photoFile) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        Client clientObject=mapper.readValue(client, Client.class);
        clientObject.setId(id);
        return clientService.createOrUpdate(clientObject, photoFile);
    }

    @DeleteMapping("/{id}")
    public void deleteClient(@PathVariable Long id) {
        clientService.deleteClient(id);
    }

}
