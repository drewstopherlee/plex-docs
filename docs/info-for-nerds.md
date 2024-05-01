---
title: Additional Info (for nerds)
sidebar_position: 4
last_update:
  date: 2024-05-01T08:30-04:00
  author: Andrew Shaffer
---

## System Diagrams

### Movie Processing Using Overseerr

```mermaid
sequenceDiagram
  autonumber
  box Frontend
  actor User
  participant Overseerr
  participant Plex
  end
  actor Admin
  box Backend
  participant File Storage
  participant Radarr / 4K
  participant Prowlarr
  participant qBittorrent
  end
  User->>Overseerr: User requests a movie
  activate Overseerr
  Admin->>Overseerr: Admin approves request
  Overseerr-->>Radarr / 4K: Movie request sent to Radarr
  Radarr / 4K-->>Prowlarr: Radarr searches for torrent via Prowlarr
  Prowlarr-->>Radarr / 4K: Prowlarr returns search results
  Radarr / 4K-->>qBittorrent: Best result is sent to torrent client
  activate qBittorrent
  Note over qBittorrent,Radarr / 4K: Radarr polls torrent client for completed downloads
  qBittorrent-->>Radarr / 4K: Detects download complete
  deactivate qBittorrent
  Radarr / 4K-->>File Storage: Moves media to Plex directory
  File Storage-->>Plex: Plex scans library for new media
  Radarr / 4K-->>Overseerr: Overseerr is alerted of media availability
  Overseerr->>User: Notification sent
  deactivate Overseerr
  User->>Plex: User watches movie
```

### NEW Series Processing Using Overseerr

```mermaid
sequenceDiagram
  autonumber
  box Frontend
  actor User
  participant Overseerr
  participant Plex
  end
  actor Admin
  box Backend
  participant File Storage
  participant Sonarr / 4K
  participant Prowlarr
  participant qBittorrent
  end
  User->>Overseerr: User requests a series
  Admin->>Overseerr: Admin approves request
  Overseerr-->>Sonarr / 4K: Series request sent to Sonarr
  Admin-->>Sonarr / 4K: Admin manually searches for seasons/episodes
  Prowlarr-->>Sonarr / 4K: Prowlarr returns search results
  Sonarr / 4K-->>qBittorrent: Chosen result is sent to torrent client
  activate qBittorrent
  Note over qBittorrent,Sonarr / 4K: Sonarr polls torrent client for completed downloads
  qBittorrent-->>Sonarr / 4K: Detects download complete
  deactivate qBittorrent
  Sonarr / 4K-->>File Storage: Moves media to Plex directory
  File Storage-->>Plex: Plex scans library for new media
  Sonarr / 4K-->>Overseerr: Overseerr is alerted of media availability
  Overseerr->>User: Notification sent<br/>(if ALL requested episodes available)
  User->>Plex: User watches show
  Sonarr / 4K-->>Prowlarr: Sonarr searches for new episodes
  Prowlarr-->>Sonarr / 4K: Prowlarr returns search results
  Sonarr / 4K-->>qBittorrent: Best result is sent to torrent client
  activate qBittorrent
  Note over qBittorrent,Sonarr / 4K: Sonarr polls torrent client for completed downloads
  qBittorrent-->>Sonarr / 4K: Detects download complete
  deactivate qBittorrent
  Sonarr / 4K-->>File Storage: Moves media to Plex directory
  File Storage-->>Plex: Plex scans library for new media
  Sonarr / 4K-->>Overseerr: Overseerr is alerted of media availability
  Overseerr->>User: Notification sent<br/>(if not notified earlier)
  User->>Plex: User watches latest episode
```
