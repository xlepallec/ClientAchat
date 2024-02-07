package com.example.clientetachat.controller;

import com.example.clientetachat.model.Achat;
import com.example.clientetachat.model.Client;
import com.example.clientetachat.repository.ClientRepository;
import com.example.clientetachat.service.AchatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/achats")
public class AchatController {

    @Autowired
    private AchatService achatService;

    @Autowired
    private ClientRepository clientRepository;

    @GetMapping
    public List<Achat> getAllAchats() {
        return achatService.getAllAchats();
    }

    @GetMapping("/{id}")
    public Achat getAchatById(@PathVariable Long id) {
        return achatService.getAchatById(id).orElse(null);
    }

    @GetMapping("/date")
    public List<Achat> getAchatsByDate(@RequestParam("date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date date) {
        return achatService.getAchatByDate(date);
    }

    @DeleteMapping("/{id}")
    public void deleteAchat(@PathVariable Long id) {
        achatService.deleteAchat(id);
    }

    @PutMapping("/client/{clientId}")
    public Achat createAchat(@PathVariable Long clientId, @RequestBody Achat achat) {
        Optional<Client> client=clientRepository.findById(clientId);
        if (client.isPresent()) {
            achat.setClient(client.get());
            return achatService.createOrUpdateAchat(achat);
        }
        return null;
    }

    @PutMapping("/{id}")
    public Achat updateAchat(@PathVariable Long id, @RequestBody Achat achat) {
        achat.setId(id);
        return achatService.createOrUpdateAchat(achat);
    }

    @GetMapping("/{id}/achats")
    public List<Achat> getAllAchatsByClientId (@PathVariable Long id) {
        return achatService.getAllAchats(id);
    }

}
