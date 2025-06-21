// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 멘토링 폼 제출 처리
    const mentoringForm = document.getElementById('mentoringForm');
    if (mentoringForm) {
        mentoringForm.addEventListener('submit', handleMentoringSubmit);
    }

    // 모달 관련 요소들
    const modal = document.getElementById('chatModal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // 모달 외부 클릭시 닫기
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // 스크롤 애니메이션
    initScrollAnimations();

    // 네비게이션 스크롤 효과
    initNavbarScroll();

    // 상담신청 목록 표시 (관리자용)
    displayMentoringRequests();
});

// 멘토링 폼 제출 처리
function handleMentoringSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        id: Date.now(), // 고유 ID 생성
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        timestamp: new Date().toISOString(),
        status: '신청완료'
    };

    // 로컬 스토리지에 저장
    saveMentoringRequest(data);
    
    // 성공 메시지 표시
    showNotification('멘토링 신청이 완료되었습니다! 곧 연락드리겠습니다.', 'success');
    
    // 폼 초기화
    event.target.reset();
}

// 상담신청 데이터를 로컬 스토리지에 저장
function saveMentoringRequest(data) {
    let requests = JSON.parse(localStorage.getItem('mentoringRequests') || '[]');
    requests.push(data);
    localStorage.setItem('mentoringRequests', JSON.stringify(requests));
    
    // 콘솔에 로그 출력 (개발자 도구에서 확인 가능)
    console.log('새로운 멘토링 신청:', data);
    console.log('전체 신청 목록:', requests);
}

// 상담신청 목록 표시 (관리자용)
function displayMentoringRequests() {
    const requests = JSON.parse(localStorage.getItem('mentoringRequests') || '[]');
    
    if (requests.length > 0) {
        console.log('=== 멘토링 신청 목록 ===');
        requests.forEach((request, index) => {
            console.log(`${index + 1}. ${request.name} (${request.email})`);
            console.log(`   주제: ${request.subject}`);
            console.log(`   내용: ${request.message}`);
            console.log(`   신청일: ${new Date(request.timestamp).toLocaleString()}`);
            console.log('---');
        });
    }
}

// 상담신청 상태 업데이트
function updateMentoringStatus(id, status) {
    let requests = JSON.parse(localStorage.getItem('mentoringRequests') || '[]');
    const requestIndex = requests.findIndex(req => req.id === id);
    
    if (requestIndex !== -1) {
        requests[requestIndex].status = status;
        localStorage.setItem('mentoringRequests', JSON.stringify(requests));
        console.log(`멘토링 신청 ID ${id} 상태가 "${status}"로 업데이트되었습니다.`);
    }
}

// 알림 메시지 표시
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // 스타일 적용
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
    `;
    
    if (type === 'success') {
        notification.style.background = '#28a745';
    } else if (type === 'error') {
        notification.style.background = '#dc3545';
    } else {
        notification.style.background = '#17a2b8';
    }
    
    document.body.appendChild(notification);
    
    // 3초 후 자동 제거
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 섹션으로 스크롤
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // 네비게이션 높이만큼 조정
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// 모달 열기
function openModal() {
    const modal = document.getElementById('chatModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // 스크롤 방지
    }
}

// 모달 닫기
function closeModal() {
    const modal = document.getElementById('chatModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // 스크롤 복원
    }
}

// 채팅 메시지 전송
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    
    if (chatInput && chatInput.value.trim() !== '') {
        const message = chatInput.value.trim();
        
        // 사용자 메시지 추가
        addMessage(message, 'sent');
        
        // 입력창 초기화
        chatInput.value = '';
        
        // 자동 응답 (실제로는 서버와 통신)
        setTimeout(() => {
            const responses = [
                '좋은 질문이네요! 더 자세히 설명해드릴게요.',
                '그 부분에 대해 도움을 드릴 수 있습니다.',
                '멘토링 신청을 통해 더 구체적인 상담을 받아보세요!',
                '관련 경험을 바탕으로 조언드리겠습니다.',
                '궁금한 점이 있으시면 언제든 말씀해주세요!'
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(randomResponse, 'received');
        }, 1000);
    }
}

// 채팅 메시지 추가
function addMessage(text, type) {
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.textContent = text;
        
        messageDiv.appendChild(contentDiv);
        chatMessages.appendChild(messageDiv);
        
        // 스크롤을 맨 아래로
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// 엔터키로 메시지 전송
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const chatInput = document.getElementById('chatInput');
        if (document.activeElement === chatInput) {
            sendMessage();
        }
    }
});

// 스크롤 애니메이션 초기화
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 애니메이션을 적용할 요소들
    const animatedElements = document.querySelectorAll('.activity-card, .certificate-card, .about-content, .mentoring-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 네비게이션 스크롤 효과
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(30, 60, 114, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)';
            navbar.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
}

// 외대 로고 애니메이션
function initLogoAnimation() {
    const logos = document.querySelectorAll('.logo-img, .footer-mascot');
    
    logos.forEach(logo => {
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = 'scale(1.1)';
        });
        
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'scale(1)';
        });
    });
}

// 페이지 로드 시 로고 애니메이션 초기화
document.addEventListener('DOMContentLoaded', function() {
    initLogoAnimation();
});

// CSS 애니메이션을 위한 스타일 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .logo-img, .footer-mascot {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);

// 멘토링 신청 버튼 클릭 시 채팅 모달 열기 (선택적 기능)
function openChatForMentoring() {
    openModal();
    setTimeout(() => {
        addMessage('멘토링에 관심을 가져주셔서 감사합니다! 어떤 부분에 대해 도움이 필요하신가요?', 'received');
    }, 500);
}

// 전역 함수로 노출 (HTML에서 호출하기 위해)
window.scrollToSection = scrollToSection;
window.openModal = openModal;
window.closeModal = closeModal;
window.sendMessage = sendMessage;
window.openChatForMentoring = openChatForMentoring;

// 관리자용 함수들 (콘솔에서 사용 가능)
window.getMentoringRequests = function() {
    const requests = JSON.parse(localStorage.getItem('mentoringRequests') || '[]');
    console.log('전체 멘토링 신청 목록:', requests);
    return requests;
};

window.clearMentoringRequests = function() {
    localStorage.removeItem('mentoringRequests');
    console.log('멘토링 신청 목록이 삭제되었습니다.');
};

window.updateRequestStatus = function(id, status) {
    updateMentoringStatus(id, status);
}; 